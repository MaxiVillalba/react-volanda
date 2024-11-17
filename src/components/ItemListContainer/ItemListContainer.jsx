// ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/db.js';

const ItemListContainer = ({ greetings }) => {
  const { categoryName } = useParams();
  const [allProducts, setAllProducts] = useState([]); // Estado para los productos

  // Función para obtener los productos de Firebase, filtrados por categoría si aplica
  const getProducts = async () => {
    const productsRef = collection(db, "products"); // Referencia a la colección de productos
    try {
      let queryRef = productsRef;
      
      // Si hay una categoría seleccionada, aplicamos el filtro
      if (categoryName) {
        queryRef = query(productsRef, where("category", "==", categoryName));
      }
      
      const dataDb = await getDocs(queryRef); // Obtener documentos de la colección o consulta filtrada
      const productsArray = dataDb.docs.map(doc => ({
        id: doc.id, // Incluye el id de cada documento
        ...doc.data() // Extrae los datos del documento
      }));
      
      setAllProducts(productsArray); // Guarda los productos en el estado
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // Llama a getProducts cuando el componente se monta o cambia la categoría
  useEffect(() => {
    getProducts();
  }, [categoryName]); // Ejecuta cada vez que cambia categoryName

  return (
    <div>
      <h2>{greetings}</h2>
      <div className="card-group">
        {allProducts.map((item) => (
          <Cards
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.text}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
