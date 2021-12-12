import React, {Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from "./pages/Header/header";
import Home from './pages/Home/home';
import About from "./pages/About/about";
import Faq from "./pages/Faq/faq";

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/faq' element={<Faq/>}/>
            </Routes>
        </Fragment>
    )
}

export default App;
