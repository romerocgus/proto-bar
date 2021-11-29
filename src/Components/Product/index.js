import React from "react";
import userImg from '../../Images/bx-user.svg';
import glutenImg from '../../Images/gluten-free.svg';
import plusImg from '../../Images/plus.svg';
import minusImg from '../../Images/minus.svg';

import './Product.css';


function Product({name,price,desc,image,person,quantity,specs, onCounterUp, onCounterDown, setOpenModal}){

    let persons = [];
    for(let i=0;i<person;i++){
        persons.push(i);
    }

    const modalOpener = (name,price,desc,image,person,quantity,specs)=>{
        setOpenModal({name,price,desc,image,person,quantity,specs});
    };

    return(
        <div className="product__container">
            <section className="product__head">
                <img className="product__img" src={image} alt="" onClick={()=>modalOpener(name,price,desc,image,person,quantity,specs)}/>
                <h2 className="product__title">{name}</h2>
                <p className="product__desc">{desc}</p>
            </section>
            <section className="product__specs">
                <p className="product__price">{price}€</p>
                <div className="product__persons">
                    {persons.map((el,pos)=>
                        <img key={pos}className="person" src={userImg} alt=""/>
                    )}
                </div>
                <div className="product__caracteristics">
                    {specs.map((el,pos) =>
                        <img key={pos} className="caracteristic" src={glutenImg} alt=""/>
                        )}
                </div>
                <div className="product__quantity">
                    <img className="product-button" src={minusImg} alt="" onClick={onCounterDown}/>
                    <img className="product-button" src={plusImg} alt="" onClick={onCounterUp}/>
                    <span className="quantity">{quantity}</span>
                </div>
            </section>
        </div>
    );
}

export { Product };