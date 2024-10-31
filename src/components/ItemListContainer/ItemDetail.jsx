// ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import useProducts from "../Data/Data.jsx"; 
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null); 
    const { idProduct } = useParams();
    const { getProducts } = useProducts(); 

    useEffect(() => {
        const data = getProducts(); 
        const findProduct = data.find((product) => product.id === idProduct);
        setProduct(findProduct || null); 
    }, [idProduct, getProducts]);

    if (!product) {
        return <div>Cargando producto...</div>; 
    }

    return (
        <ItemDetail product={product} />
    );
};

export default ItemDetailContainer;
