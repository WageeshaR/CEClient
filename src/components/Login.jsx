import { useEffect, useState } from 'react'
import { loginFields } from "../constants/formFields"
import Input from "./Input"
import FormExtra from './FormExtra'
import FormAction from './FormAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../store/features/auth/auth'

const fields = loginFields
let initialFieldsState = {}
fields.forEach(field => initialFieldsState[field.id] = '')

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [fieldState, setFieldState] = useState(initialFieldsState)
    const token = useSelector(state => state.auth.data.token)

    useEffect(() => {
        console.log("Token value: ", token)
        if (token) {
            navigate("/home")
        }
    }, [token])

    const handleChange = (e) => {
        setFieldState({...fieldState, [e.target.id]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        authenticateUser(e)
    }

    const authenticateUser = async (e) => {
        const username = e.target["username"].value
        const password = e.target["password"].value
        dispatch(loginThunk({ username: username, password: password }))
    }

    return(
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 w-3/12 m-auto">
            <div className="-space-y-px">
                {
                    fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={fieldState[field.id]}
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