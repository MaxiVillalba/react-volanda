// ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
import db from '../../db/db.js';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null); // Estado para el producto
  const [loading, setLoading] = useState(true); // Estado de carga

  // Función para obtener el producto por ID desde Firebase
  const getProductsById = async () => {
    const docRef = doc(db, "products", idProduct);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No se encontró el producto");
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    } finally {
      setLoading(false); // Cambia el estado de carga independientemente del resultado
    }
  };

  // Llama a getProductsById cuando el componente se monta o cambia el idProduct
  useEffect(() => {
    getProductsById();
  }, [idProduct]);

  // Si el producto se está cargando, mostramos un mensaje de carga
  if (loading) {
    return <div>Cargando producto...</div>;
  }

  // Si no se encontró el producto, mostramos un mensaje
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Cuando el producto se ha cargado correctamente, mostramos los detalles
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
