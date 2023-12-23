import {useNavigate} from 'react-router-dom';

const Root = () => {
    const navigate = useNavigate();
    return (
    <div 
        className="flex flex-col h-screen w-screen text-center align-center bg-primary-dark"
        onClick={() => navigate('/login')}
    >
        <div className="m-auto">
            <div className="text-6xl font-bold text-white">
                Welcome to CollabEd!
            </div>
            <p className="text-white">
                Collaborative, insightful networking with your peers. Click anywhere to get started.
            </p>
        </div>
    </div>
    )
}

export default Root