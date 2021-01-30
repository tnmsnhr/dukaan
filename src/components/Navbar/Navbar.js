import React from 'react';
import logo from '../../images/logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar__area">
                <div className="navbar--left">
                    <p>Store made with</p>
                    <img src={logo} alt="logo" className="navbar__logo"/>
                </div>
                <div className="navbar--right">
                    <p>download app</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
