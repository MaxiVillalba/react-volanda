import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext"; 
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext); 

  if (!product) {
    return <div>No se encontraron detalles para este producto.</div>;
  }

  const handleBuy = () => {
    if (product.stock <= 0) {
      alert("Este producto no está disponible.");
      return;
    }

    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      stock: product.stock,
      quantity: 1, 
    });
    alert(`¡Se añadió "${product.title}" al carrito!`);
  };

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
          {product.secondaryImages &&
            product.secondaryImages.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`${product.title} - secundaria ${index + 1}`}
              />
            ))}
        </div>
        <div className="main-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.title}</h2>
        <p className="text-detail">{product.text}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        <p className="text-detail">Cantidad disponible: {product.stock}</p>
        <p className="text-detail">Detalles: {product.detail}</p>
        <button className="button-end-buy" onClick={handleBuy}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
