import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Login from "../../components/Login";

const LoginPage = () => {
    const navigate = useNavigate();
    return (
    <>
        <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Register"
            linkUrl="/register"
        />
        <Login />
    </>
    )
}

export default LoginPage;