import { useEffect, useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { User } from '../api/models';
import { useDispatch, useSelector } from 'react-redux';
import { registerStudentThunk, selectUser } from '../store/features/auth/auth';
import { useNavigate } from 'react-router-dom';

const fields: any = signupFields;
let fieldsState: any = {};

fields.forEach((field: any) => fieldsState[field.id] = '');

export default function Register() {
  const [signupState,setSignupState] = useState(fieldsState);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.id != null) {
        navigate("/login")
    }
  }, [user])

  const handleChange = (e: any) => setSignupState({...signupState, [e.target.id]:e.target.value});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(signupState)
    createAccount(e)
  }

  //handle Signup API Integration here
  const createAccount = (e: any) => {
    const user: User = {
        email: e.target["email"].value,
        firstName: e.target["first_name"].value,
        lastName: e.target["last_name"].value,
        password: e.target["password"].value,
        username: e.target["username"].value,
        institution: {
            id: e.target["institution"].value,
            name: ""
        }
    }
    dispatch(registerStudentThunk(user))
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
            <FormAction type='Button' action='submit' text="Sign up" />
            </div>
        </form>
    )
}