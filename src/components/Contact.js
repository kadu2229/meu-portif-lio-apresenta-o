import React from "react";
import "../styles/CardSelectedContent.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <div className="contactBody">
      <h1>Contato</h1>

      <p className="contactIntro">
        Quer conversar sobre oportunidades, projetos ou trocar uma ideia?
        Fique à vontade para entrar em contato comigo 👋
      </p>

      <div className="contactList">
        <a
          href="mailto:kadu2229@yahoo.com.br"
          className="contactItem"
        >
          <div className="contactIcon">
            <MdEmail />
          </div>

          <div className="contactInfo">
            <span className="contactLabel">Email</span>
            <span className="contactValue">
              kadu2229@yahoo.com.br
            </span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/carlos-eduardo-s-710555119/"
          target="_blank"
          rel="noopener noreferrer"
          className="contactItem"
        >
          <div className="contactIcon">
            <FaLinkedin />
          </div>

          <div className="contactInfo">
            <span className="contactLabel">LinkedIn</span>
          </div>
        </a>
      </div>
    </div>
  );
}
