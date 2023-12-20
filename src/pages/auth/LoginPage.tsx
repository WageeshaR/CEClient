import Header from "../../components/Header";
import Login from "../../components/Login";

const LoginPage = () => {
    return (
    <>
        <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Register"
            linkUrl="/register"
            marginTop="mt-44"
        />
        <Login />
    </>
    )
}

export default LoginPage;