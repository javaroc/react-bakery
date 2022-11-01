import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import AboutUs from "./paths/about-us.js";
import Checkout from "./paths/checkout.js";
import Menu from "./paths/menu.js";
import Navbar from "./paths/navbar.js";
import './App.css';

window.$BABA = "BABA";
window.$CRISP = "CRISP";
window.$PRICES = {CRISP: 8.99, BABA: 45};
window.$cart = {BABA : 0, CRISP: 0};




function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<AboutUs/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
