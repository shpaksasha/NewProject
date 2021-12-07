import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from "./pages/Header/header";
import Home from './pages/Home/home';
import About from "./pages/About/about";
import Faq from "./pages/Contact/contact";

const App = () => {
    return (
        <Routes>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/faq' component={Faq}/>
        </Routes>
    )
}

export default App;
