import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const PostRegPrompt = (
    {keyHandler}:
    {keyHandler: any}
) => {

    const navigate = useNavigate();

    const handleInput = (e: any) => {
        console.log("button input: ", e)
        if (e == true) {
            keyHandler("init")
        } else {
            navigate("/home");
        }
    }
    return (
        <div className='bg-primary-light bg-opacity-50 w-screen h-screen flex flex-col'>
            <div className='bg-primary-light h-5/6 w-screen flex'>
                <div className='m-auto text-4xl font-bold text-white text-center flex flex-col'>
                    <p>Thanks for becoming a change maker with CollabEd!</p>
                    <p className='text-[25px]'>Would you mind answering a few questions before exploring CollabEd space?</p>
                    <div className='w-[400px] h-auto m-auto mt-6 flex text-lg justify-around'>
                        <button
                            id='btn-1'
                            onClick={() => handleInput(true)}
                            type='button'
                            className='bg-primary-dark hover:bg-primary-dark-hover text-white font-bold py-2 px-4 rounded'>
                            Absolutely not
                        </button>
                        <button
                            id='btn-2'
                            onClick={() => handleInput(false)}
                            type='button'
                            className='bg-transparent hover:bg-primary-dark-hover hover:border-primary-dark-hover border-solid border-2 font-bold py-2 px-4 rounded'>
                            I'd skip for now
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-primary-dark h-1/6 w-screen'></div>
        </div>
    )
}