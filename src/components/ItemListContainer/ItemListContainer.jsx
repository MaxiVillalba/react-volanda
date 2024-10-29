import React from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Carousel from '../Carousels/Carousel';

const ItemListContainer = ({ greetings }) => {
  const { categoryName } = useParams();

  const items = [
    { title: 'Londres', category: 'europe', text: 'Descubre Londres', image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Barcelona', category: 'europe', text: 'Descubre Barcelona', image: "https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { title: 'Tokyo', category: 'asia', text: 'Descubre Tokyo', image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { title: 'Marsella', category: 'europe', text: 'Descubre Marsella', image: "https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ];

  const filteredItems = categoryName ? items.filter(item => item.category === categoryName) : items;

  return (
    <div>
      <h2>{greetings}</h2>
      <Carousel />

      <div className="card-group">
        {filteredItems.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
            updatedAt={item.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
