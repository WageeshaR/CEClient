import Register from "../../components/Register";
import Header from "../../components/Header";
import RegStepComponent from "../../components/RegStepComponent";
import { NAryNode, nAryTree } from "../../constants/registrationStepsChain";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { User } from "../../api/models";
import { useDispatch, useSelector } from "react-redux";
import { registerStudentThunk, selectStatus, statusReducer } from "../../store/features/auth/auth";
import { ReducerState } from "../../store/types";
import { useNavigate } from "react-router-dom";
import * as _ from "lodash";

const RegisterPage = () => {
    const [regStepKey, setKey] = useState("")
    const [step, setStep] = useState(nAryTree.root)
    const dispatch = useDispatch()
    const authStatus: ReducerState = useSelector(selectStatus);
    const navigate = useNavigate();
    const user: MutableRefObject<User> = useRef({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    })

    useEffect(() => {
        if (authStatus == ReducerState.FULFILLED) {
            dispatch(statusReducer(ReducerState.IDLE))
            navigate("/login")
        }
    }, [authStatus])

    useEffect(() => {
        let child: NAryNode | null = ["", "init"].includes(regStepKey) ? null : step.children[0]
        while (! child?.data.index.some(d => d == regStepKey || d == "any") && child != null) {
            child = child.children[0]
        }
        if (child) {
            setStep(child)
        } else if (! step.data.index.includes("init")) {
            dispatch(registerStudentThunk(user.current))
        }
    }, [regStepKey])

    const updateUser = (o: any) => {
        _.merge(user.current, o)
    }

    function stepKeyHandler(e: string) {
        setKey(e)
    }

    if (regStepKey == "") {
        return (
        <>
            <Header
                heading="Create a CollabEd account"
                paragraph="With one account you can benefit from 100% of CollabEd features."
                linkName=""
                linkUrl=""
                marginTop="mt-8"
            />
            <Register userUpdater={updateUser} keyHandler={stepKeyHandler} />
        </>
        )
    }
    else return (
        <RegStepComponent userUpdater={updateUser} keyHandler={stepKeyHandler} step={step}/>
    )
}

export default RegisterPage;