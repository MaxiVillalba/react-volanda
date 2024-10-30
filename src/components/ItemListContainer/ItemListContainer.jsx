import React from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Carousel from '../Carousels/Carousel';

const ItemListContainer = ({ greetings }) => {
  const { categoryName } = useParams();

  const allItems = [
    { title: 'Londres', category: 'destinos', text: 'Descubre Londres', detail: "Vuelo I/V en noviembre", price: "400", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Barcelona', category: 'destinos', text: 'Descubre Barcelona', detail: "Vuelo I/V en noviembre", price: "700", image: "https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Tokyo', category: 'destinos', text: 'Descubre Tokyo', detail: "Vuelo I/V en noviembre", price: "600", image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Marsella', category: 'destinos', text: 'Descubre Marsella', detail: "Vuelo I/V en noviembre", price: "500", image: "https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Paris', category: 'promociones', text: 'Descubre Paris', detail: "Vuelo I/V en noviembre", price: "400", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Madrid', category: 'promociones', text: 'Descubre Barcelona', detail: "Vuelo I/V en noviembre", price: "700", image: "https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Roma', category: 'promociones', text: 'Descubre Tokyo', detail: "Vuelo I/V en noviembre", price: "600", image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Rio de Janeiro', category: 'promociones', text: 'Descubre Marsella', detail: "Vuelo I/V en noviembre", price: "500", image: "https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Mallorca', category: 'paquetes', text: 'Descubre Mallorca', detail: "Vuelo I/V en noviembre", price: "400", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Cancún', category: 'paquetes', text: 'Descubre Cancún', detail: "Vuelo I/V en noviembre", price: "700", image: "https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Bariloche', category: 'paquetes', text: 'Descubre Bariloche', detail: "Vuelo I/V en noviembre", price: "600", image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: 'Toronto', category: 'paquetes', text: 'Descubre Toronto', detail: "Vuelo I/V en noviembre", price: "500", image: "https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  const filteredItems = categoryName ? allItems.filter(item => item.category === categoryName) : allItems;

  return (
    <div>
      <h2>{greetings}</h2>
      
      {!categoryName && <Carousel />}

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
