import React from "react";
import igImg from "../../Images/logo-instagram.svg";
import facebookImg from "../../Images/logo-facebook.svg";
import world from "../../Images/logo-world.svg";
import "./Footer.css";

function Footer(){
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__listItem">
                    <a href="/" target="_blank" rel="noreferrer">
                        <img className="footer__img" src={igImg} alt=""/>
                    </a>
                </li>
                <li className="footer__listItem">
                    <a href="/" target="_blank" rel="noreferrer">
                        <img className="footer__img" src={facebookImg} alt=""/>
                    </a>
                </li>
                <li className="footer__listItem">
                    <a href="/" target="_blank" rel="noreferrer">
                        <img className="footer__img" src={world} alt=""/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export {Footer};