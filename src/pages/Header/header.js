import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/faq'>FAQ</Link>
        </div>
    )
}


export default Header;
