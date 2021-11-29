import React from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../../Images/homeBurger.svg";
import './Navbar.css';

function Navbar(){
    const [listVisible, setListVisible] = React.useState(false);

    const toggleList = ()=>{
        setListVisible(!listVisible);
    }
    return(
        <nav className="navbar">
            <NavLink className="navbar__brand-link"to="/">
            <div className="navbar__brand">
                <img className="navbar__brand-img" src={brandLogo} alt= ""/>
                <span className="navbar__brand-text">BRAND</span>
            </div>
            </NavLink>
            
            <div className={`navbar__button ${listVisible ? "cross" : ""}`} onClick={toggleList}></div>
            <ul className={`navbar__list ${listVisible ? "active" : ""}`}>
                <li className="navbar__item"><NavLink className="navbar__item-link" to="/entrantes">ENTRANTES</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__item-link" to="/burgers">BURGERS</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__item-link" to="/veggies">VEGGIES</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__item-link" to="/bebidas">BEBIDAS</NavLink></li>
            </ul>
        </nav>
    );
}

export { Navbar };