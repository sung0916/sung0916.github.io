import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navi from './Navi/Navi';

function App() {



    return (
        <Routes>
            <Route path='/' element={<Navi/>}>

            </Route>
        </Routes>
    );
}

export default App;
