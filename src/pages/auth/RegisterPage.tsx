import Register from "../../components/Register";
import Header from "../../components/Header";
import RegStepComponent from "../../components/RegStepComponent";
import { NAryNode, nAryTree } from "../../constants/registrationStepsChain";
import { useEffect, useState } from "react";

const RegisterPage = () => {
    const [regStepKey, setKey] = useState("")
    const [step, setStep] = useState(nAryTree.root)

    useEffect(() => {
        step.children.forEach((c: NAryNode) => {
            if (c.data.key == regStepKey) {
                setStep(c)
                return
            }
        })
    }, [regStepKey])

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
            <Register keyHandler={stepKeyHandler} />
        </>
        )
    }
    else return (
        <RegStepComponent keyHandler={stepKeyHandler} step={step}/>
    )
}

export default RegisterPage;