import CartWidget from "./CartWidget";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Volanda</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? "active-link" : "" )} aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/destinos">Destinos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/paquetes">Paquetes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" /* Link className="nav-link disabled" aria-disabled="true" (acá y asi para deshabilitar)*/ to="/category/promociones">Promociones</Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget className="icon-cart" />
    </nav>
  );
};

export default NavBar;
