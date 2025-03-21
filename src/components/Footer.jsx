import React from "react";
import "@styles/footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Mon Portfolio - Tous droits réservés</p>
      <div className="social-icons">
        <a href="https://github.com/Justin-oc" alt="Repo GitHub" target="_blank" rel="noopener">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/justin-acheaibi-585687300/" alt="Profil LinkedIn" target="_blank" rel="noopener">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;