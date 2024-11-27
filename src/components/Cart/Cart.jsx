import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>
          El carrito está vacío. <Link to="/">Volver a la tienda</Link>
        </p>
      ) : (
        <>
          {cart.map(({ id, name, price, quantity, image }) => (
            <div key={id} className="cart-item">
              <img src={image} alt={name} width="50" />
              <div>
                <h4>{name}</h4>
                <p>Cantidad: {quantity}</p>
                <p>Precio: ${price}</p>
                <p>Stock restante: {stock - quantity}</p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice()}</h2>
          <div className="cart-actions">
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">
              <button>Ir al Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
