import CartWidget from"./CartWidget"
import "./navbar.scss"

const NavBar = () => {
  return (
<nav>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Destinos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Paquetes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Promociones</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget className="icon-cart" />
</nav>
</nav>
  )
}

export default NavBar