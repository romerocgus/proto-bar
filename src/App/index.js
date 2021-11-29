import React from "react";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { AppProvider } from "../AppContext";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <AppProvider>
        <Outlet />
      </AppProvider>
      <Footer />
    </React.Fragment>
    
  );
}

export default App;
