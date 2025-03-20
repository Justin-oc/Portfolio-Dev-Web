import React from "react";
import { Link } from "react-router-dom";
import "@styles/header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
            <Link to="/">Mon Portfolio</Link>
        </div>
          <ul>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Compétences</Link></li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;