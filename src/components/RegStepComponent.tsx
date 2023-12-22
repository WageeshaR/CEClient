import { useEffect, useState } from "react"
import { NAryNode, RegistrationStep } from "../constants/registrationStepsChain"

export default function RegStepComponent ({ step, keyHandler }:{ step: NAryNode, keyHandler: any }) {
    useEffect(() => {
        console.log("Rendered")
    }, [step])

    return(
        <div key={step.data.key} className={'mb-10 mt-20'}>
            <div className="flex justify-center">
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {step.data.prompt}
            </h2>
            <br/>
            <br/>
            {step.data.values.map(v => {
                return (
                    <button key={v.length} onClick={(e: any) => keyHandler(e.target.value)} value={v}>
                        {v}
                    </button>
                )
            })}
        </div>
    )
}