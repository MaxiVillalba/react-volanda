import React, { createContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Crear el proveedor del contexto
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (!existingProduct) {
        if (product.quantity > product.stock) {
          alert(`Solo hay ${product.stock} unidades disponibles.`);
          return prevCart;
        }
        return [...prevCart, { ...product }];
      }

      const newQuantity = existingProduct.quantity + product.quantity;

      if (newQuantity > product.stock) {
        alert(`No puedes añadir más de ${product.stock} unidades.`);
        return prevCart;
      }

      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Exportar como un objeto para garantizar consistencia
export { CartContext, CartProvider };
