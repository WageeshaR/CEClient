import { useEffect, useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, statusReducer } from '../store/features/auth/auth';
import { useNavigate } from 'react-router-dom';
import { ReducerState } from '../store/types';
import { User } from '../api/models';

const fields: any = signupFields;
let fieldsState: any = {};

fields.forEach((field: any) => fieldsState[field.id] = '');

export default function Register({ keyHandler, userUpdater }: { keyHandler: any, userUpdater: any }) {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setSignupState({
        ...signupState,
        [e.target.id]: e.target.type != 'checkbox' ? e.target.value : e.target.checked
    })
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let user: any = {}
    const userData = [...new FormData(e.target).entries()]
    userData.forEach(function(value: any){
        const key: keyof User = value[0]
        if (key == 'institution') {
            user[key] = {
                id: value[1],
                name: ""
            }
        } else {
            user[key] = value[1] as never;
        }
    });
    userUpdater(user)
    keyHandler("prompt")
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
                        isRequired={false}
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