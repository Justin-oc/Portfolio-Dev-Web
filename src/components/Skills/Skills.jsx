import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Compétences</h2>
      <div className="skills-list">
        <h3>Générales</h3>
        <ul>
          <li>Développement Frontend</li>
          <li>Développement Backend</li>
          <li>Développement Fullstack</li>
          <li>Optimisation des performances web</li>
          <li>Accessibilité web</li>
          <li>UX/UI Design</li>
          <li>Intégration d’API</li>
          <li>Gestion de bases de données</li>
          <li>SEO technique</li>
          <li>Tests et débogage</li>
        </ul>
      </div>
      <div className="skills-list">
        <h3>Techniques</h3>
        <ul>
          <li>HTML / CSS / SASS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js / React Router</li>
          <li>Node.js / Express.js</li>
          <li>MongoDB / Mongoose</li>
          <li>Lighthouse (SEO & performances)</li>
          <li>Git / GitHub</li>
          <li>Vite</li>
          <li>API REST</li>
          <li>Architecture MVC</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;