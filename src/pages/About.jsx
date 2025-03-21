import React from "react";
import "@styles/about.scss";
import { FaReact, FaUniversalAccess } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiSass, SiBootstrap, SiGit, SiGithub } from "react-icons/si";
import { MdSpeed } from "react-icons/md";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>À propos de moi</h2>
        <p>
          Je suis un développeur front-end passionné, à l'aise en React et efficace dans
          le développement de sites web moderne. Bien que je sois en début de parcours,
          j'ai la soif d'apprendre et de me former jour après jour. J'aime créer des interfaces 
          interactives, performantes et accessibles.
        </p>

        <div className="about-content">
          <img src="/images/photo_justin.jpg" alt="photographie de Justin" className="profile-pic" />
          <div className="about-text">
            <h3>Mon parcours</h3>
            <p>
            Fort d'une expérience en tant qu'aide-soignant qui m'a permis de développer un excellent relationnel,
            une grande adaptabilité et une soif constante d'apprendre, j'ai relevé le défi d'une reconversion
            en développement web, une passion concrétisée par ma formation chez OpenClassrooms. 
            Disponible dès avril 2025, je suis prêt à mettre mes compétences à votre service.
            </p>
            <h3>Mes compétences</h3>
            <ul>
              <li>React, JavaScript <span className="tech-icons"><FaReact /><SiJavascript /></span></li>
              <li>HTML, CSS, Sass, Bootstrap<span className="tech-icons"><SiHtml5 /><SiCss3 /><SiSass /><SiBootstrap /></span></li>
              <li>Git, GitHub<span className="tech-icons"><SiGit /><SiGithub /></span></li>
              <li>Performance Web & Accessibilité<span className="tech-icons"><MdSpeed /><FaUniversalAccess /></span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;