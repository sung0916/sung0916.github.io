import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navi from "../Navi/Navi";
import Header from "../Header/Header";
import './Layout.css';
import NaviIcon from "../Navi/NaviIcon";

function Layout() {

    return (
        <div className="whole-container">
            <Header/>

            <div className="nav-container">
                <Navi/>
                <NaviIcon/>
            </div>
            
            <main className="main-container">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
}

export default Layout;