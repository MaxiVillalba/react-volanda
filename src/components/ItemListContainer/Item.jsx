import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();

    if (product.stock <= 0) {
      alert("Este producto no tiene stock disponible.");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock, 
      quantity: 1, 
    });
  };

  return (
    <div className="item">
      <Link to={`/detail/${product.id}`} className="item-link">
        <img src={product.image} alt={product.name} className="img-item" />
        <p>{product.name}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock disponible: {product.stock}</p>
      </Link>
      <button onClick={handleAddToCart}>Comprar</button>
    </div>
  );
};

export default Item;
