export default function FormAction({
        type,
        action,
        text
    }:{
        type: string,
        action: any,
        text: string
    }
){
    return(
        <>
        {
            type === 'Button' ?
            <button
                type={action}
                className="group relative w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-light hover:bg-primary-light-hover focus:outline-none mt-10"
            >
                {text}
            </button>
            :
            <></>
        }
        </>
    )
}