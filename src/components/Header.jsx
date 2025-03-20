import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@styles/header.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Mon Portfolio</Link>
        </div>
        
        {/* Bouton hamburger */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>À propos</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projets</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Compétences</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;