import CartWidget from "../Cart/CartWidget";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ className }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${className}`}>
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
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/destinos">Destinos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/paquetes">Paquetes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/promociones">Promociones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/promociones">checkout</Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget className="icon-cart" />
    </nav>
  );
};

export default NavBar;
