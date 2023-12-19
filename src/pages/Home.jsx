import React from "react";
import {useNavigate} from 'react-router-dom';

const Home = ({routes}) => {
    const navigate = useNavigate();
    return (
    <div 
        class="flex flex-col h-screen w-screen bg-black bg-opacity-90 text-slate-200 text-center align-center"
        onClick={() => navigate('/login')}
    >
        <div class="m-auto">
            <div class="text-6xl font-bold font-sans">
                Welcome to CollabEd!
            </div>
            <p class="text-slate-400">
                Collaborative, insightful networking with your peers. Click anywhere to get started.
            </p>
        </div>
    </div>
    )
}

export default Home