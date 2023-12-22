import Register from "../../components/Register";
import Header from "../../components/Header";

const RegisterPage = () => {
    return (
        <>
            <Header
                heading="Create a CollabEd account"
                paragraph="With one account you can benefit from 100% of CollabEd features."
                linkName=""
                linkUrl=""
                marginTop="mt-8"
            />
            <Register />
        </>
    )
}

export default RegisterPage;