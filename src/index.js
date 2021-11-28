import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Home } from "./routes/Home";
import { Entrantes } from "./routes/Entrantes";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path="entrantes" element={<Entrantes />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
