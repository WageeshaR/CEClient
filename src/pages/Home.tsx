import { useEffect } from "react";
import { selectToken } from "../store/features/auth/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomNavBar from "../components/NavBar";

const Home = () => {
    const navigate = useNavigate()
    const token = useSelector(selectToken)
    const dispatch = useDispatch();

    useEffect(() => {
        if (! token) {
            navigate("/login")
        }
    },[token])

    return (
    <>
        <div className="flex w-screen h-screen scroll-my-0">
            <CustomNavBar />
            <div className="m-auto text-6xl">
                <p>Hello, from home page!</p>
            </div>
        </div>
    </>
    )
}

export default Home