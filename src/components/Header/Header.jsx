import React from "react";
import "@styles/header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Mon Portfolio</div>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;