// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Banner from './components/Banners/Banner';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import Carousel from './components/Carousels/Carousel.jsx';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Carousel />

        <Routes>
          <Route path="/" element={<ItemListContainer greetings="Bienvenidos a Volanda" />} />
          <Route path="/category/:categoryName" element={<ItemListContainer saludo="Categorias" />} />
          <Route path="detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="*" element={<div>error 404 - pagina no encontrada</div>} />
        </Routes>
        
        <Banner
          imageSrc="https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Viaja con Volanda, Viaja a tus vacaciones"
        />
      </div>
    </Router>
  );
}

export default App;
