import React from "react";
import igImg from "../../Images/logo-instagram.svg";
import facebookImg from "../../Images/logo-facebook.svg";
import world from "../../Images/logo-world.svg";
import "./Footer.css";

function Footer(){
    return (
        <footer class="footer">
            <ul class="footer__list">
                <li class="footer__listItem">
                    <a href="/" target="_blank" rel="noreferrer">
                        <img class="footer__img" src={igImg} alt=""/>
                    </a>
                </li>
                <li class="footer__listItem">
                    <a href="/" target="_blank" rel="noreferrer">
                        <img class="footer__img" src={facebookImg} alt=""/>
                    </a>
                </li>
                <li class="footer__listItem">
                    <a href="/" target="_blank" rel="noreferrer">
                        <img class="footer__img" src={world} alt=""/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export {Footer};