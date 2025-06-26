import { useState } from 'react';
import MyCKEditor from '../../../API/CKEditor/CKEditor';
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
            <ul className='skill-menu'>
                <li>Linux</li>
                <li>Cloud</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
            <div>
                <ul className='board-ul'>
                    <li>제목</li>
                    <li>작성일</li>
                    <li>조회수</li>
                    <li>✂️</li>
                </ul>
                {
                    <ul className='board-ul'>
                        <li>제목</li>
                        <li>작성일</li>
                        <li>조회수</li>
                        <li>
                            <a href='#'>수정</a>/<a href='#'>삭제</a>
                        </li>
                    </ul>
                }
            </div>

            <div className='p-w-box'>
                <div className='paging-area'>
                    페이지네이션 (구현 필요)
                </div>
                <Link to="/main/skill/write">
                    <button>글쓰기</button>
                </Link>
            </div>
        </div>
    );
}
export default Skill;