import { Link } from "react-router-dom";
function Home(){
    return (
        <div>
            <h1>ESTE ES EL HOME</h1>
            <Link to="/entrantes">Entrantes</Link>
        </div>
        

    );
}

export {Home};