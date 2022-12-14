import React, { useEffect, useState } from 'react';

import './Navbar.css';

function Navbar() {

    return (
        <div className="navbar-fixed">
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="#" className="brand-logo logo">
                        <img className="image" src="https://res.cloudinary.com/alphapod/image/upload/v1594203567/fbos/mshop-icon.png" width="50px"></img>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Login</a></li>
                        <li> Or </li>
                        <li><a href="#">Register</a></li>
                    </ul>
                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;