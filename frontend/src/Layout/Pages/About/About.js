import './About.css';
import '../../Layout.css';

function About() {

    return (
        <div>
            <div id='profile-title'>Newbie Dev profile</div>
            <div className='profile-container'>
                <img id="profile-photo" src="/Images/profile.jpg"/>

                <ul id='profile-story'>
                    <li>
                        <div className='profile-category'>Name</div>
                        <div>성광식</div>
                    </li>
                    <li>
                        <div className='profile-category'>Birth</div>
                        <div>1992.09.16 / 2:55pm</div>
                    </li>
                    <li>
                        <div className='profile-category'>Home</div>
                        <div>서울특별시 동대문구</div>
                    </li>
                    <li>
                        <div className='profile-category'>Tel</div>
                        <div>+82 10 5043 2501</div>
                    </li>
                    <li id='more-info'>
                        <span>더보기</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;