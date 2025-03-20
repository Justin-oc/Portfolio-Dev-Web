import React from "react";
import "@styles/about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>À propos de moi</h2>
        <p>
          Je suis un développeur front-end passionné, spécialisé en React et en
          développement web moderne. J'aime créer des interfaces interactives,
          performantes et accessibles.
        </p>

        <div className="about-content">
          <img src="/assets/profile.jpg" alt="Moi" className="profile-pic" />
          <div className="about-text">
            <h3>Mon parcours</h3>
            <p>
              J'ai commencé le développement web il y a quelques années et j'ai
              rapidement été attiré par les technologies modernes comme React,
              Sass et Bootstrap.
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