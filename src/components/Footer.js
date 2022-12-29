import React from "react";
import "../styles/Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="socialLinks">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/carlos-s-710555119/"
        >
          Entre em contato comigo!
        </a>
        <BsLinkedin className="socialLogos" />
      </div>
      <div className="socialLinks">
        <a
          href="https://github.com/kadu2229?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Acompanhe meus projetos!
        </a>
        <AiFillGithub className="socialLogos" />
      </div>
    </footer>
  );
}

export default Footer;
