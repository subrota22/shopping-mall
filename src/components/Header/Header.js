import React from 'react';
import "./Header.css" ;
import logo  from "../../images/Logo.svg" ;
const Header = () => {
    return (
    <nav className='header'>

 <img src={logo} alt="logo" className='logo' />    

   <div>
    <a href="/home">Home</a>
    <a href="/preview">Preview</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
    <a href="/manage-inventory" title='manage inventory'>Manage</a>
    <a href="/login">Login</a>
    </div>   
        </nav>
    );
};

export default Header;