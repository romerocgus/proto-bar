import React from "react";
import { Link } from "react-router-dom";
import './CategoryButton.css';

function CategoryButton({name, img}){
    return (
        <Link to={`/${name}`} className="category">
                <img className="category__img" src={img} alt="" />
                <div className={`category__caption ${name}`}>
                    <h3 className="category__title">{name}</h3>
                </div>
        </Link>
    );
}

export { CategoryButton };