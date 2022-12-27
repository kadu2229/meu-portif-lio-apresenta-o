import React from "react";
import '../styles/Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
    <footer className="footer">
      <div className="socialLinks">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/carlos-s-710555119/"
        >
          <p>Entre em contato comigo!</p>
          <BsLinkedin className="socialLogos" />
        </a>
      </div>
      <div className="socialLinks">
        <a
          href="https://github.com/kadu2229?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <p>Acompanhe meus projetos!</p>
          <AiFillGithub className="socialLogos" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;