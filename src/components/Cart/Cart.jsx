import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, removeItem } = useContext(CartContext); // Accede al carrito y funciones

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>
          El carrito está vacío. <Link to="/">Volver a la tienda</Link>
        </p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="50" />
              <div>
                <h4>{item.name}</h4>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice()}</h2>
          <Link to="/checkout">
            <button>Ir al Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
