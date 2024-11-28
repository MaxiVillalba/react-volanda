// ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/db.js';

const ItemListContainer = ({ greetings }) => {
  const { categoryName } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    try {
      const productsRef = collection(db, "products");
      let queryRef = categoryName 
        ? query(productsRef, where("category", "==", categoryName)) 
        : productsRef;

      const dataDb = await getDocs(queryRef);
      const productsArray = dataDb.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllProducts(productsArray);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryName]);

  return (
    <div>
      <h2>{greetings}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="card-group">
          {allProducts.map(item => (
            <Cards
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              image={item.image}
              price={item.price}
              stock={item.stock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
