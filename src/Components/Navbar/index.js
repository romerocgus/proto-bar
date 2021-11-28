import React from "react";
import brandLogo from "../../Images/homeBurger.svg";
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <img className="navbar__img" src={brandLogo} alt= ""/>
            <span className="navbar__brand">BRAND</span>
            <div className="navbar__button"></div>
            <ul className="navbar__list">
                <li className="navbar__item">ENTRANTES</li>
                <li className="navbar__item">BURGERS</li>
                <li className="navbar__item">VEGGIES</li>
                <li className="navbar__item">BEBIDAS</li>
            </ul>
        </nav>
    );
}

export { Navbar };