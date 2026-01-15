import React, { useState } from "react";
import "../styles/CardSelectedContent.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="contactBody">
      <h1>Contato</h1>

      <p className="contactIntro">
        Quer falar sobre oportunidades, projetos ou parcerias?
        Me mande uma mensagem!
      </p>

      <form
        className="contactForm"
        action={`mailto:kadu2229@yahoo.com.br`}
        method="POST"
        encType="text/plain"
      >
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Seu email"
          required
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Sua mensagem"
          required
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">
          <MdEmail />
          Enviar mensagem
        </button>
      </form>

      <a
        href="https://wa.me/5521974283146?text="
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappButton"
      >
        <FaWhatsapp />
        Falar comigo no WhatsApp
      </a>
    </div>
  );
}