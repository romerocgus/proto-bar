import React from 'react';
import { Navbar } from '../../Components/Navbar';
import { Product } from '../../Components/Product';
import { DetailsModal } from '../../Components/DetailsModal';
import { AppContext } from '../../AppContext';

import fries from "../../Images/fries.jpg";
import plusImg from "../../Images/plus.svg";
import minusImg from "../../Images/minus.svg";
import arrowImg from "../../Images/arrow.svg";

import './Entrantes.css';

function Entrantes(){
    const value= React.useContext(AppContext);
    const [openModal, setOpenModal] = React.useState(null);
    
    return(
        <React.Fragment>
            <Navbar />
            <main className="page">  
                <img className="banner" src={fries} alt=""/>
                <h1 className="subtitle">ENTRANTES</h1>
                {value.products.map(en =>
                    <Product
                        key={en.id} 
                        name={en.name} 
                        price={en.price}
                        desc={en.description}
                        image={en.image}
                        person={en.person}
                        quantity={en.quantity}
                        specs={en.specs}
                        onCounterUp={() => value.counterUp(en.id)}
                        onCounterDown={() => value.counterDown(en.id)}
                        setOpenModal={setOpenModal}
                    />
                )}
                {!!openModal && (
                    <DetailsModal>
                    <div className="modal__background"onClick={()=>setOpenModal(null)}>
                        <div className="modal__container">
                            <h1 className="modal__title">{openModal.name}</h1>
                            <img className="modal__img" src={openModal.image} alt=""/>
                            <div className="modal__details">
                                <p className="details">Detalles</p>
                                <img className="details-button" src={arrowImg} alt=""/>
                            </div>
                            <h2 className="modal__price">{openModal.price}€</h2>
                            <div className="modal__counter">
                                <img className="counter-button" src={minusImg} alt=""/>
                                <img className="counter-button" src={plusImg} alt=""/>
                                <p className="quantity">{openModal.quantity}</p>
                            </div>
                        </div>
                    </div>
                </DetailsModal>
                )}
                
            </main>
        </React.Fragment>
        
    );
}

export {Entrantes};