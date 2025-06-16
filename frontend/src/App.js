import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from './Layout/Pages/MainPage';
import Welcome from './WelcomePage/Welcome';
import About from './Layout/Pages/About/About';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Welcome/>}/>

            <Route path='/main' element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path='about' element={<About/>}/>
            </Route>
        </Routes>
    );
}

export default App;
