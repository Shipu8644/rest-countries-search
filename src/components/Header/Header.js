import React from 'react';
import logo from '../../images/country.png'
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav className='nav'>
                    <a href="/home">Home</a>
                    <a href="/admin">Overview</a>
                    <a href="/contact">Contact Manager</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;