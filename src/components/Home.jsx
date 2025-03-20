import React from "react";
import { Link } from "react-router-dom";
import "@styles/home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenue sur mon Portfolio
        </motion.h1>
        <p>Développeur Front-End passionné</p>
        <Link to="/projects" className="cta-button">Voir mes projets</Link>
      </div>
    </section>
  );
};

export default Home;