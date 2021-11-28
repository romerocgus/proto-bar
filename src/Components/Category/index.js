import React from "react";
import { Link } from "react-router-dom";
// import entrantesImg from "../../Images/fries.jpg";
// import burgersImg from "../../Images/burger.jpg";
import './Category.css';

function Category({name, img}){
    return (
        <Link to={`/${name}`}>
            <figure className="category"tabIndex="0" >
                <img className="category__img" src={img} alt="" />
                <figcaption className={`category__caption ${name}`}>
                    <h3 className="category__title">{name}</h3>
                </figcaption>
            </figure>
        </Link>
    );
}

export { Category };