import { useState } from 'react';
import MyCKEditor from '../../../API/CKEditor/WritePage';
import './Skill.css';
import { Link } from 'react-router-dom';

function Skill() {
    // 1. editorContent 상태 변수와 setter 함수를 정의합니다.
    //const [editorContent, setEditorContent] = useState('');

    // 2. handleEditorChange 함수를 정의합니다.
    // const handleEditorChange = (data) => {
    //     console.log("CKEditor 내용 (HTML):", data);
    //     setEditorContent(data); // 에디터 내용을 editorContent 상태에 저장
    // };

    // 3. handleSaveContent 함수를 정의합니다.
    // const handleSaveContent = () => {
    //     if (editorContent) {
    //         alert("내용이 저장되었습니다 (콘솔 확인):\n" + editorContent.substring(0, 100) + "...");
    //         // 실제 저장 로직 (예: API 호출)
    //         // saveToServer(editorContent);
    //         console.log("저장될 내용:", editorContent);
    //     } else {
    //         alert("저장할 내용이 없습니다.");
    //     }
    // };

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

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Skill & 게시판</h2>
                {/* Link 컴포넌트를 사용하여 글쓰기 페이지로 이동 */}
                <Link to="/main/skill/write">
                    <button>글쓰기</button>
                </Link>
                {/* useNavigate를 사용할 경우:
                <button onClick={goToWritePage}>글쓰기</button>
                */}
            </div>

            <div className="editor-section"> {/* 에디터 섹션을 위한 클래스 추가 (선택 사항) */}
                {/* 페이지네이션은 필요에 따라 이 아래나 다른 위치에 배치 */}
                <div style={{ marginTop: '20px' }}>
                    페이지네이션 (구현 필요)
                </div>
            </div>
        </div>
    );
}

export default Skill;