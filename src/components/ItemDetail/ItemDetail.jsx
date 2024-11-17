// ItemDetail.jsx
import React from 'react';
import './itemdetail.css';

const ItemDetail = ({ product }) => {
  if (!product) {
    return <div>No se encontraron detalles para este producto.</div>;
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
      <div className="secondary-images">
          {product.secondaryImages && product.secondaryImages.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt={`${product.title} - secundaria ${index + 1}`} />
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
        <p className="text-detail">Detalles: {product.detail}</p>
        <button className="button-end-buy">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
