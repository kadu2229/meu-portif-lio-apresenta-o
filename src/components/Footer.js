import React from "react";
import "../styles/Footer.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p className="footerText">
          © {new Date().getFullYear()} Carlos Eduardo da Silva. 
          Todos os direitos reservados.
        </p>

        <div className="footerLinks">
          <a
            href="mailto:kadu2229@yahoo.com.br"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="https://wa.me/5521974283146"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-eduardo-s-710555119/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/kadu2229"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}