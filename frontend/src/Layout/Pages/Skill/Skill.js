import './Skill.css';

function Skill() {

    return(
        <div className='skill-container'>
            <ul>
                <li>Linux</li>
                <li>Cloud</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
            <div>
                <ul>
                    <li>제목</li>
                    <li>작성일</li>
                    <li>조회수</li>
                </ul>
                <ul>
                    <li>제목</li>
                    <li>작성일</li>
                    <li>조회수</li>
                </ul>
            </div>
            <div>
                페이지네이션
                글쓰기(ToastEditor)
            </div>
        </div>
    );
}

export default Skill;