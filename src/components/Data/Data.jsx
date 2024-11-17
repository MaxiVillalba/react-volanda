import { useState } from 'react';

const initialProducts = [
  { id: "ds1", 
    title: 'Barcelona',  
    category: 'destinos', 
    text: 'Descubre Barcelona', 
    detail: "Vuelo I/V en noviembre", 
    price: "700", 
    image: "https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1610213989414-acc5773ba2c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1654684784883-3423612c0629?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",] },
  
      { id: "ds2", 
        title: 'Tokyo',  
        category: 'destinos', 
        text: 'Descubre Tokyo', 
        detail: "Vuelo I/V en noviembre", 
        price: "600", 
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1584999479230-dcf570c89b3e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1664806462678-5df01513f7b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  },
  
      { id: "ds3", 
        title: 'Londres',  
        category: 'destinos', 
        text: 'Descubre Londres', 
        detail: "Vuelo I/V en noviembre", 
        price: "400", 
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  },
  
      { id: "ds4", 
        title: 'Marsella',  
        category: 'destinos', 
        text: 'Descubre Marsella', 
        detail: "Vuelo I/V en noviembre", 
        price: "500", 
    image: "https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1687689785639-b42967e626d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1641999459085-9191206cd23c?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1692118450510-3c1d8e7d1ae8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  },
  
      { id: "pr1", 
        title: 'Paris',  
        category: 'promociones', 
        text: 'Descubre Paris', 
        detail: "Vuelo I/V en noviembre", 
        price: "400", 
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        secondaryImages: ["https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          "https://images.unsplash.com/photo-1606944634479-cb9c844135ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  }, // paris
  
    { id: "pr2", 
      title: 'Madrid',  
      category: 'promociones', 
      text: 'Descubre madrid', 
      detail: "Vuelo I/V en noviembre", 
      price: "700", 
    image: "https://images.unsplash.com/photo-1564565899675-a159063d17be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1506976773555-b3da30a63b57?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1569310151835-0655902b8d46?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1532184312173-028645e16ba8?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  }, // madrid
  
      { id: "pr3", 
        title: 'Roma',  
        category: 'promociones', 
        text: 'Descubre Tokyo', 
        detail: "Vuelo I/V en noviembre", 
        price: "600", 
    image: "https://images.unsplash.com/photo-1632851853187-dae5c83372dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1548585742-1df49e753a83?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  }, //
  
      { id: "pr4", 
        title: 'Rio de Janeiro',  
        category: 'promociones', 
        text: 'Descubre Marsella', 
        detail: "Vuelo I/V en noviembre", 
        price: "760", 
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1655737862571-8da504b92244?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1683331404237-64c763c70f5b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1699062093600-813da0bf85ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  }, // rio
  
      { id: "pq1", 
        title: 'Mallorca',  
        category: 'paquetes', 
        text: 'Descubre Mallorca', 
        detail: "Vuelo I/V en noviembre", 
        price: "400", 
    image: "https://images.unsplash.com/photo-1566993850067-bb8df9c9807e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1437651025703-2858c944e3eb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1437651025703-2858c944e3eb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1560243360-0eb6e88f0d08?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  }, // mallorca
  
      { id: "pq2", 
        title: 'Cancún',  
        category: 'paquetes', 
        text: 'Descubre Cancún', 
        detail: "Vuelo I/V en noviembre", 
        price: "700", 
    image: "https://images.unsplash.com/photo-1570737543098-0983d88f796d?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    secondaryImages: ["https://images.unsplash.com/photo-1728029733453-75334f5c6561?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1602088113235-229c19758e9f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1660088190597-dbc4b61aca78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  }, // cancun
  
      { id: "pq3", 
        title: 'Bariloche',  
        category: 'paquetes', 
        text: 'Descubre Bariloche',
        detail: "Vuelo I/V en noviembre", 
        price: "600", 
    image: "https://images.unsplash.com/photo-1702263525855-385a520842cf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", secondaryImages: ["https://images.unsplash.com/photo-1716824272167-876189244a41?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1660510637667-e09f0f8af5d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1506008507510-b50b54454e49?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  }, // bariloche
  
      { id: "pq4", 
        title: 'Edinburgo',  
        category: 'paquetes', 
        text: 'Descubre Edinburgo', 
        detail: "Vuelo I/V en noviembre", 
        price: "500", 
    image: "https://images.unsplash.com/photo-1571044880241-95d4c9aa06f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", secondaryImages: ["https://images.unsplash.com/photo-1535905471006-9b3b2c82ea94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1594929109002-01e2e17a964d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1695289210822-d10ebce11022?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]  } //edinburgo
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
