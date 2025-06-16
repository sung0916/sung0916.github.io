import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import { useEffect, useState } from "react";

function Welcome() {
    const [isInteracted, setIsInteracted] = useState(false);
    const navigate = useNavigate();

    //버튼 클릭 시 메인 페이지로 이동하는 함수
    const handleEnter = () => {
        navigate('/main');
    };

    //컴포넌트가 마운트될 때 클릭 및 키다운 이벤트리스너 추가
    useEffect(() => {
        const handleClick = () => {
            setIsInteracted(true);
        };

        const handleKeyDown = (event) => {
            if(event.key === 'Escape') {
                setIsInteracted(false);
            } else {
                setIsInteracted(true);
            }
        };

        window.addEventListener('click', handleClick);
        window.addEventListener('keydown',handleKeyDown);

        //컴포넌트가 언마운트될 때 리스너정리(메모리누수방지)
        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="welcome-container">
            <video
                className={`welcome-video ${isInteracted ? 'blur' : ''}`}
                autoPlay
                loop
                muted
                playsInline    
            >
                <source src="/welcome.mp4" type="video/mp4"/>    
            </video>

            {/* 상호작용 시 나타나는 컨텐츠 */}
            {isInteracted && (
                <div className="welcome-content">
                    <h1>Welcome to visit!</h1>
                    <button onClick={handleEnter}>입장하기</button>
                </div>
            )}
        </div>
    );
}

export default Welcome;