import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (!existingProduct) {
        return [...prevCart, { ...product, quantity: product.quantity }];
      }
      const newQuantity = existingProduct.quantity + product.quantity;
      if (newQuantity > product.stock) {
        alert(`Quedan ${product.stock} unidades de ${product.name}`);
        return prevCart;
      }
      return prevCart.map((item) => 
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      );
    });
  };
  
  const processPurchase = () => {
    cart.forEach((item) => {
      const productIndex = products.findIndex((p) => p.id === item.id);
      if (productIndex !== -1) {
        products[productIndex].stock -= item.quantity;
      }
    });
    clearCart(); // 
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
      value={{ cart, addToCart, removeItem, clearCart, totalPrice, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
