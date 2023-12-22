import { NAryNode } from "../constants/registrationStepsChain"

export default function RegStepComponent (
    { step, keyHandler, userUpdater }:{ step: NAryNode, keyHandler: any, userUpdater: any }
) {
    function clickHandler(e: string) {
        userUpdater({
            [step.data.key]: e
        })
        keyHandler(e)
    }

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
                    <button key={v.length} onClick={(e: any) => clickHandler(e.target.value)} value={v}>
                        {v}
                    </button>
                )
            })}
        </div>
    )
}