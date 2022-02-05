import React, {Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from "./pages/Header/header";
import Home from './pages/Home/home';
import About from './pages/About/about';
import Container from '@mui/material/Container';
import CatalogBooks from './pages/Catalog/CatalogBooks';


const App = () => {
    return (
        <Fragment>
            <Header/>
            <Container maxWidth='lg'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/catalog' element={<CatalogBooks/>}/>
            </Routes>
            </Container>
        </Fragment>
    )
}

export default App;
