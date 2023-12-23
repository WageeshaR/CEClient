import { useState } from "react";
import { NAryNode } from "../constants/registrationStepsChain"

export default function RegStepComponent (
    { step, keyHandler, userUpdater }:{ step: NAryNode, keyHandler: any, userUpdater: any }
) {
    const [effect, setEffect] = useState(false);
    const [key, setKey] = useState(null as any)
    function clickHandler(e: string) {
        userUpdater({
            profile: {[step.data.key]: e}
        })
        keyHandler(e)
    }

    return(
        <div key={step.data.key} className="w-screen h-screen flex flex-col justify-evenly">
            <div className="ml-auto mr-auto w-1/2 h-1/4 felx flex-col">
                <h2 className="text-center mt-40 text-4xl font-medium text-gray-900">
                    {step.data.prompt}
                </h2>
            </div>
            <div className="ml-auto mr-auto w-auto flex flex-col">
                <div className="w-auto m-auto h-auto flex justify-between">
                {step.data.values.map((v,i) => {
                return (
                    <button 
                        className={`${key == (step.data.key + i) && effect && "animate-wiggle"} ml-1 mr-1 w-auto pb-2 pt-2 pl-10 pr-10 border-2 border-solid border-primary-dark rounded-md text-black`}
                        key={step.data.key + i}
                        onClick={(e: any) => {
                            setTimeout(() => {
                                clickHandler(e.target.value)
                            }, 1000)
                            setKey(step.data.key + i)
                            setEffect(true)
                        }}
                        onAnimationEnd={() => setEffect(false)}
                        value={v}
                    >
                        {v}
                    </button>
                )
                })}
                </div>
            </div>
        </div>
    )
}