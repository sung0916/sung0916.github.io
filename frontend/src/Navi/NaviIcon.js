import './NaviIcon.css';
import menuIcon from '../Images/menu.png';
import { useEffect, useState } from 'react';

function NaviIcon() {
    //메뉴 열림/닫힘 관리
    const [isOpen, setIsOpen] = useState(false);

    //메뉴아이콘 클릭시 호출
    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    //창 크기가 800px 이상으로 변경되면 메뉴를 닫는 함수
    useEffect(() => {
        //메뉴 닫기
        const handleResize = () => {
            if(window.innerWidth > 800) {
                setIsOpen(false);
            }
        };

        //이벤트 리스너
        window.addEventListener('resize', handleResize);

        //컴포넌트 언마운트 시 이벤트 리스너 제거(메모리 누수 방지)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);  //빈배열 : 컴포넌트가 처음 마운트될 때만 실행
    
    //버튼 클래스를 동적으로 설정
    const menuClassName = `icon-nav ${isOpen ? 'active' : ''}`;

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