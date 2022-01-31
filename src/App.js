import React, {Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from "./pages/Header/header";
import Home from './pages/Home/home';
import About from "./pages/About/about";
import Books from "./pages/Books/books";
import Container from '@mui/material/Container';


const App = () => {
    return (

        <Fragment>
            <Header/>
            <Container maxWidth="lg" sx={{height: '100vh', marginTop: '95px'}}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/faq' element={<Books/>}/>
            </Routes>
            </Container>
        </Fragment>

    )
}

export default App;
