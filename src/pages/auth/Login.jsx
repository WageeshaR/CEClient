import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
    <div
        class="flex flex-col h-screen w-screen text-center align-center"
        onClick={() => navigate('/register')}
    >
        <div class="m-auto">
            <div class="font-sans text-6xl font-semibold">
                Login page
            </div>
        </div>
    </div>
    )
}

export default Login;