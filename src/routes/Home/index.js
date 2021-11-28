import React from "react";
import { CategoryButton } from "../../Components/CategoryButton";
import brandLogo from "../../Images/homeBurger.svg";
import './Home.css';

import entrantesImg from "../../Images/fries.jpg";
import burgersImg from "../../Images/burger.jpg";
import veggiesImg from "../../Images/veggie.jpg";
import drinksImg from "../../Images/beer.jpg"
const categories = [
    {
        name:"entrantes",
        img: entrantesImg,
    },
    {
        name:"burgers",
        img: burgersImg,
    },
    {
        name:"veggies",
        img: veggiesImg,
    },
    {
        name:"bebidas",
        img: drinksImg,
    },
];

function Home(){
    return (
        <React.Fragment>
            <header className="header">
                <img src={brandLogo} alt=""/>
                <h1 className="header__brand">BRAND</h1>
            </header>
            <main className="container">
                <h2 className= "about">"las mejores hamburguesas de tu vida"</h2>
                {categories.map(cat =>
                    <CategoryButton key={cat.name} name={cat.name} img={cat.img}/>
                )
                }
            </main>
        </React.Fragment>

    );
}

export {Home};