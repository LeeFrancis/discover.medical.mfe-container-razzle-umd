import React from 'react';
import './_index.css';
import logo from '../../../react.svg';

const Header = () => {
    return (
        <div className="Home">
            <div className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <h2>Welcome to Dynamed</h2>
            </div>
        </div>
    );
};

export default Header;