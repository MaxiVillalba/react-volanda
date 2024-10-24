import './App.css';
import Banner from './components/Banners/Banner';
import Cards from './components/Cards/Cards';
import Carousel from './components/Carousels/Carousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greetings={"Bienvenidos a Volanda"} />
        
        <div className="card-group">
          <Cards 
            title="Londres"
            text="Descubre la maravilla de Londres"
            image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            updatedAt="Última actualización hace 5min"
          />
          <Cards
            title="Barcelona"
            text="Esta es la segunda tarjeta con texto diferente."
            image="https://images.unsplash.com/photo-1688680437050-d2cddf4f20b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            updatedAt="Última actualización hace 10min"
          />
          <Cards
            title="Paris"
            text="Esta tarjeta tiene aún más contenido para mostrar diferentes longitudes."
            image="https://images.unsplash.com/photo-1492136344046-866c85e0bf04?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            updatedAt="Última actualización hace 2min"
          />
            <Cards
            title="Venecia"
            text="Esta tarjeta tiene aún más contenido para mostrar diferentes longitudes."
            image="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            updatedAt="Última actualización hace 2min"
          />
        </div>
        <Carousel />

        <div className="card-group">
          <Cards 
            title="Marsella"
            text="Dejate conquistar por el encanto de la costa azul"
            image="https://plus.unsplash.com/premium_photo-1661963861529-02951a02a25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            updatedAt="Última actualización hace 5min"
          />
          <Cards
            title="Edimburgo"
            text="Un destino magico y diferente"
            image="https://images.unsplash.com/photo-1569668444050-b7bc2bfec0c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            updatedAt="Última actualización hace 10min"
          />
          <Cards
            title="Mallorca"
            text="Descubre las calas paradisiacas de la isla"
            image="https://images.unsplash.com/photo-1537042145424-98c3022ed567?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            updatedAt="Última actualización hace 2min"
          />
            <Cards
            title="Girona"
            text="Esta tarjeta tiene aún más contenido para mostrar diferentes longitudes."
            image="https://images.unsplash.com/photo-1711445414984-815cfe04d7bc?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            updatedAt="Última actualización hace 2min"
          />
        </div>
        <Banner
        imageSrc="https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Viaja con Volanda, Viaja a tus vacaciones" />       
      </div>
    </>
  );
}

export default App;
