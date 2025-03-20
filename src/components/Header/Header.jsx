import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Justin Acheaibi</div>
      <nav>
        <ul>
          <li><NavLink end to="/">Accueil</NavLink></li>
          <li><NavLink to="/about">À propos</NavLink></li>
          <li><NavLink to="/skills">Compétences</NavLink></li>
          <li><NavLink to="/projects">Projets</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;