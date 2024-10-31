import { useState } from 'react';

const initialProducts = [
  { id: "ds1", title: 'Barcelona', category: 'destinos', text: 'Descubre Barcelona', detail: "Vuelo I/V en noviembre", price: "700", image: "https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "ds2", title: 'Tokyo', category: 'destinos', text: 'Descubre Tokyo', detail: "Vuelo I/V en noviembre", price: "600", image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "ds3", title: 'Londres', category: 'destinos', text: 'Descubre Londres', detail: "Vuelo I/V en noviembre", price: "400", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "ds4", title: 'Marsella', category: 'destinos', text: 'Descubre Marsella', detail: "Vuelo I/V en noviembre", price: "500", image: "https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "pr1", title: 'Paris', category: 'promociones', text: 'Descubre Paris', detail: "Vuelo I/V en noviembre", price: "400", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "pr2", title: 'Madrid', category: 'promociones', text: 'Descubre Barcelona', detail: "Vuelo I/V en noviembre", price: "700", image: "https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "pr3", title: 'Roma', category: 'promociones', text: 'Descubre Tokyo', detail: "Vuelo I/V en noviembre", price: "600", image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "pr4", title: 'Rio de Janeiro', category: 'promociones', text: 'Descubre Marsella', detail: "Vuelo I/V en noviembre", price: "500", image: "https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "pq1", title: 'Mallorca', category: 'paquetes', text: 'Descubre Mallorca', detail: "Vuelo I/V en noviembre", price: "400", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "pq2", title: 'Cancún', category: 'paquetes', text: 'Descubre Cancún', detail: "Vuelo I/V en noviembre", price: "700", image: "https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "pq3", title: 'Bariloche', category: 'paquetes', text: 'Descubre Bariloche', detail: "Vuelo I/V en noviembre", price: "600", image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "pq4", title: 'Toronto', category: 'paquetes', text: 'Descubre Toronto', detail: "Vuelo I/V en noviembre", price: "500", image: "https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const useProducts = () => {
  const [products, setProducts] = useState(initialProducts);

  const getProducts = (categoryName) => {
    return categoryName
      ? products.filter(product => product.category === categoryName)
      : products;
  };

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  return { getProducts, updateProducts };
};

export default useProducts;
