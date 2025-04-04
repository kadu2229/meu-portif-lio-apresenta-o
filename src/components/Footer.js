import React from "react";
import "../styles/Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
      <footer className="footer">
        <p>© Carlos Eduardo da Silva. Todos os direitos reservados.</p>
        <h4>Fale Comigo!!</h4>
        <section id="contacts">
          <a href="https://w.app/xecti0">
            {" "}
            <FaWhatsapp />
            +55 21974283146{" "}
          </a>
          <a href="mailto:kadu2229@yahoo.com.br?subject=Preciso+de+um+dev!">
            {" "}
            <CiMail /> kadu2229@yahoo.com.br{" "}
          </a>
        </section>
      </footer>
  );
}

export default Footer;
