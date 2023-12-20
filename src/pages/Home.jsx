import React, { useEffect } from "react";
import { selectToken } from "../store/features/auth/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const navigate = useNavigate()
    const token = useSelector(selectToken)

    useEffect(() => {
        if (! token) {
            navigate("/login")
        }
    },[token])

    return (
    <>
        <div className="flex w-full h-full bg-red-300 items-center">
            <div className="text-6xl m-auto">
                Hello, from home page!
            </div>
        </div>
    </>
    )
}

export default Home