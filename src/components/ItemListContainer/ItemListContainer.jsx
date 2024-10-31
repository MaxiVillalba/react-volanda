// ItemListContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';
import useProducts from '../Data/Data.jsx';

const ItemListContainer = ({ greetings }) => {
  const { categoryName } = useParams();
  const { getProducts } = useProducts();

  // Obtener todos los productos
  const allProducts = getProducts();

  // Filtrar los productos según la categoría seleccionada
  const filteredItems = categoryName ? allProducts.filter(item => item.category === categoryName) : allProducts;

  return (
    <div>
      <h2>{greetings}</h2>
      <div className="card-group">
        {filteredItems.map((item, index) => (
          <Cards
            key={`${item.category}-${index}`}
            title={item.title}
            text={item.text}
            image={item.image}
            price={item.price}
            detail={item.detail}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
