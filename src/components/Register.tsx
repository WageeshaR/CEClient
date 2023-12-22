import { useEffect, useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { useDispatch, useSelector } from 'react-redux';
import { regStepReducer, registerStudentThunk, selectStatus, statusReducer } from '../store/features/auth/auth';
import { useNavigate } from 'react-router-dom';
import { ReducerState } from '../store/types';

const fields: any = signupFields;
let fieldsState: any = {};

fields.forEach((field: any) => fieldsState[field.id] = '');

export default function Register({ keyHandler }: { keyHandler: any }) {
  const [signupState, setSignupState] = useState(fieldsState);
  const dispatch = useDispatch();
  const authStatus: ReducerState = useSelector(selectStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus == ReducerState.FULFILLED) {
        dispatch(statusReducer(ReducerState.IDLE))
        navigate("/login")
    }
  }, [authStatus])

  const handleChange = (e: any) => {
    setSignupState({
        ...signupState,
        [e.target.id]: e.target.type != 'checkbox' ? e.target.value : e.target.checked}
    )
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(signupState)
    createAccount(e)
  }

  //handle Signup API Integration here
  const createAccount = (e: any) => {
    let user: any = {}
    const userData = [...new FormData(e.target).entries()]
    userData.forEach(function(value: any){
        if (value[0] == 'institution') {
            user[value[0]] = {
                id: value[1]
            }
        } else {
            user[value[0]] = value[1];
        }
    });
    keyHandler("init")
    // dispatch(regStepReducer("init"))
  }

    return(
        <form className="mt-8 space-y-6 w-3/12 m-auto" onSubmit={handleSubmit}>
            <div className="">
            {
                fields.map((field: any) =>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                        customClass={null}
                    />
                )
            }
            <FormAction type='Button' action='submit' text="Continue" />
            </div>
        </form>
    )
}