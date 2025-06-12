import './NaviIcon.css';
import menuIcon from '../Images/menu.png';
import { useState } from 'react';

function NaviIcon() {
    //메뉴 열림/닫힘 관리
    const [isOpen, setIsOpen] = useState(false);

    //메뉴아이콘 클릭시 호출
    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    
    //버튼 클래스를 동적으로 설정
    const menuClassName = `icon-nav ${isOpen ? 'active' : ''}`;

    //햄버거 클릭 시 탭메뉴로 들어가는 네비목록 노출하는 함수만들기

    return (
        <div>
            <button className='menu-icon' onClick={handleMenuToggle}>
                <img src={menuIcon} alt={isOpen?'닫기':'메뉴'} title={isOpen?'메뉴 닫기':'메뉴 보기'}/>
            </button>

            <ul className={menuClassName}>
                <li><a title='성광식?'>About</a></li>
                <li><a title='기술스택'>Skills</a></li>
                <li><a title='포트폴리오'>Portfolio</a></li>
                <li><a title='발자취'>Footprint</a></li>
                <li><a title='개인정보'>Private</a></li>
            </ul>
        </div>
    );
}

export default NaviIcon;