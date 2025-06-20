import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">KDramaVibes</h1>
        
        {/* Menú Hamburguesa para móviles */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/favoritos" onClick={toggleMenu}>Favoritos</Link></li>
          <li><Link to="/descubre" onClick={toggleMenu}>Descubre</Link></li>
          <li><Link to="/calendario" onClick={toggleMenu}>Calendario</Link></li>
          
          {/* Menú desplegable para las listas */}
          <li className="dropdown">
            <span className="dropdown-toggle">Mis Listas</span>
            <div className="dropdown-menu">
              <Link to="/visto" onClick={toggleMenu}>✅ Visto</Link>
              <Link to="/quiero-ver" onClick={toggleMenu}>⭐ Quiero ver</Link>
              <Link to="/en-emision" onClick={toggleMenu}>🔴 En emisión</Link>
            </div>
          </li>
          
          <li>
            <button onClick={toggleTheme} className="btn-theme">
              {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;