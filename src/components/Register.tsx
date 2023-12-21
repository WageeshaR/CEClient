import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields: any = signupFields;
let fieldsState: any = {};

fields.forEach((field: any) => fieldsState[field.id] = '');

export default function Register() {
  const [signupState,setSignupState] = useState(fieldsState);

  const handleChange = (e: any) => setSignupState({...signupState, [e.target.id]:e.target.value});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount = () => {

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