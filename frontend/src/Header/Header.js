import './Header.css';
import mieum from '../Images/mieum.png';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className="header-container">
            <div className='logo-container'>
                <Link to='/main'><img src={mieum} className='to-home' title='홈으로'/></Link>
            </div>
            <div className='log-container'>

            </div>
        </div>
    );
}

export default Header;