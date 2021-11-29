import entranteItem from '../Images/entrantesItem.jpg';

const entrantes = [
    {
        id:1,
        name:"Entrante 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus habitasse nullam sed cras.",
        image: entranteItem,
        price: 5,
        person: 2,
        quantity: 0,
        specs: ["gluten-free"]
    },
    {
        id:2,
        name:"Entrante 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus habitasse nullam sed cras.",
        image: entranteItem,
        price: 6,
        person: 5,
        quantity: 0,
        specs: ["gluten-free","gluten-free","gluten-free","gluten-free"]
    },
    {
        id:3,
        name:"Entrante 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus habitasse nullam sed cras.",
        image: entranteItem,
        price: 4,
        person: 1,
        quantity: 0,
        specs: ["gluten-free","gluten-free","gluten-free","gluten-free","gluten-free"]
    },
];

function getData(){
    return entrantes;
}

export {getData};