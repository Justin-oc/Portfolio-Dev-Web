import React from "react";
import "@styles/about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>À propos de moi</h2>
        <p>
          Je suis un développeur front-end passionné, je suis à l'aise en React et efficace dans
          le développement de sites web moderne. J'aime créer des interfaces interactives,
          performantes et accessibles.
        </p>

        <div className="about-content">
          <img src="/assets/profile.jpg" alt="Moi" className="profile-pic" />
          <div className="about-text">
            <h3>Mon parcours</h3>
            <p>
            Fort d'une expérience en aide-soignant qui m'a permis de développer un excellent relationnel,
            une grande adaptabilité et une soif constante d'apprendre, j'ai relevé le défi d'une reconversio
            en développement web, une passion concrétisée par ma formation chez OpenClassrooms. 
            Disponible dès avril 2025, je suis prêt à mettre mes compétences à votre service.
            </p>
            <h3>Mes compétences</h3>
            <ul>
              <li>React, JavaScript, TypeScript</li>
              <li>HTML, CSS, Sass, Bootstrap</li>
              <li>Git, GitHub, CI/CD</li>
              <li>Performance Web & Accessibilité</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;