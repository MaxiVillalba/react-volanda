import React, { useContext } from "react";
import { TfiShoppingCart } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext); // Obtén los productos del carrito desde el contexto
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleCartClick = () => {
    navigate("/cart"); // Redirige al usuario a la página del carrito
  };

  return (
    <div className="cartwidget" onClick={handleCartClick} style={{ cursor: "pointer" }}>
      <TfiShoppingCart className="icon-cart" color="grey" />
      <p>{cart.length}</p> {/* Muestra el número de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
