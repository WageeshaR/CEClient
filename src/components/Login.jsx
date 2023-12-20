import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from './FormExtra';
import FormAction from './FormAction';
import { authenticate } from '../api/apiHandler';
import { useNavigate } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => {
        setLoginState({...loginState, [e.target.id]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser(e);
    }

    //Handle Login API Integration here
    const authenticateUser = async (e) => {
        const username = e.target["username"].value;
        const password = e.target["password"].value;
        await authenticate(username, password)
        .then(() => {
            navigate("/home")
        })
        .catch(function (error) {
            console.log("Auth failed: ".concat(error))
        })
    }

    return(
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 w-3/12 m-auto">
            <div className="-space-y-px">
                {
                    fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                        />
                    
                    )
                }
            </div>
            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text={"Sign in"}/>
        </form>
    )
}