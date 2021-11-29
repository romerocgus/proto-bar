import React from "react";
import { getData } from '../data/entrantes-data';

const AppContext = React.createContext();

function AppProvider(props){
    let entrantes = getData();
    const [products, setProducts] = React.useState(entrantes);

    const counterUp = (id)=>{
        const prodIndex = entrantes.findIndex(el => el.id === id);
        const newEntrantes = [...entrantes];
        newEntrantes[prodIndex].quantity++;
        setProducts(newEntrantes);
    };

    const counterDown = (id)=>{
        const prodIndex = entrantes.findIndex(el => el.id === id);
        const newEntrantes = [...entrantes];
        if(newEntrantes[prodIndex].quantity >= 1)
            newEntrantes[prodIndex].quantity--;
        setProducts(newEntrantes);
    };

    return(
        <AppContext.Provider value={{
        products,
        counterUp,
        counterDown,
        }}>
            {props.children}
        </AppContext.Provider>
    );
};

export {AppContext, AppProvider};