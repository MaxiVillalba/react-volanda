// ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db/db.js';

const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProductById = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "products", idProduct);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.error("Producto no encontrado");
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById();
  }, [idProduct]);

  if (loading) return <div>Cargando producto...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
