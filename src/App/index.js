import React from "react";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <Outlet />
      <Footer />
    </React.Fragment>
    
  );
}

export default App;
