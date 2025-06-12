import './Navi.css';

function Navi() {
    /*isOpen에 따라 'active' 클래스를 동적으로 추가/제거
    const navClassName = isOpen ? 'active' : '';*/

    return (
        <ul id="nav">
            <li><a title='성광식?'>About</a></li>
            <li><a title='기술스택'>Skills</a></li>
            <li><a title='포트폴리오'>Portfolio</a></li>
            <li><a title='발자취'>Footprint</a></li>
            <li><a title='개인정보'>Private</a></li>
        </ul>
    );
}

export default Navi;

