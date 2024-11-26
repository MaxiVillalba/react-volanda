import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Banner from "./components/Banners/Banner";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Carousel from "./components/Carousels/Carousel";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
        <NavBar className={isDarkMode ? "dark-mode" : ""} />
        <ToastContainer theme={isDarkMode ? "dark" : "light"} />
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="dark-mode-toggle"
        >
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <Carousel className={isDarkMode ? "dark-mode" : ""} />

        <Routes>
          <Route path="/" element={<ItemListContainer greetings="Bienvenidos a Volanda" />} />
          <Route path="/category/:categoryName" element={<ItemListContainer greetings="Categorías" />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>Error 404 - Página no encontrada</div>} />
        </Routes>

        <Banner
          imageSrc="https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2012&auto=format&fit=crop"
          altText="Viaja con Volanda, Viaja a tus vacaciones"
          className={isDarkMode ? "dark-mode" : ""}
        />
      </div>
    </Router>
  );
}

export default App;
