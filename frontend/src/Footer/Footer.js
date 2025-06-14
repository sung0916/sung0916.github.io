import './Footer.css';
import github from '../Images/github.png';
import home from '../Images/home.png';
import tel from '../Images/tel.png';

function Footer() {

    return (
        <div className="footer-container">
            <div className='footer-content'>
                <ul id='footer-ul'>
                    <li id='copyright'>
                        @CopyRight 성광식
                    </li>
                    <li>
                        <img src={home} className='copyright-icons' title='거주지'/>
                    </li>
                    <li>
                        <img src={tel} className='copyright-icons' title='연락처'/>
                    </li>
                    <li>
                        <a href='https://github.com/sung0916' target='_blank'>
                            <img src={github} className='copyright-icons' title='깃허브로'/>
                        </a>
                    </li>
                </ul>
                


            </div>
        </div>
    );
}

export default Footer;