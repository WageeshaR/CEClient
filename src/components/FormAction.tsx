export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type === 'Button' ?
            <button
                type={action}
                className="group relative w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none mt-10"
            >
                {text}
            </button>
            :
            <></>
        }
        </>
    )
}