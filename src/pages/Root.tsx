import {useNavigate} from 'react-router-dom';

const Root = () => {
    const navigate = useNavigate();
    return (
    <div 
        className="flex flex-col h-screen w-screen bg-black bg-opacity-90 text-slate-200 text-center align-center"
        onClick={() => navigate('/login')}
    >
        <div className="m-auto">
            <div className="text-6xl font-bold font-sans">
                Welcome to CollabEd!
            </div>
            <p className="text-slate-400">
                Collaborative, insightful networking with your peers. Click anywhere to get started.
            </p>
        </div>
    </div>
    )
}

export default Root