import React from "react";
import "../styles/CardSelectedContent.css";

export function Academic() {
  return (
    <div className="academicBody">
      <h1>academic</h1>

      <div className="academicItem">
        <span className="academicPeriod">2024 – atual</span>
        <h2>Análise e Desenvolvimento de Sistemas</h2>
        <p className="academicInstitution">Unigranrio</p>
        <p className="academicDescription">
          Graduação focada em desenvolvimento de software, lógica de programação,
          bancos de dados, engenharia de software e arquitetura de aplicações.
        </p>
      </div>

      <div className="academicItem">
        <span className="academicPeriod">2022 – 2023</span>
        <h2>Desenvolvimento Web Full Stack</h2>
        <p className="academicInstitution">Trybe</p>
        <p className="academicDescription">
          Formação intensiva com foco em Front-end e Back-end utilizando
          JavaScript, React, testes automatizados, APIs REST, autenticação e boas
          práticas de desenvolvimento.
        </p>
      </div>

      <div className="academicItem">
        <span className="academicPeriod">Curso em andamento</span>
        <h2>Node.js do Zero à Maestria</h2>
        <p className="academicInstitution">Udemy</p>
        <p className="academicDescription">
          Curso focado no desenvolvimento Back-end com Node.js, abordando
          Express, APIs REST, autenticação com JWT, integração com bancos de
          dados e conceitos de aplicação em produção.
        </p>
      </div>
    </div>
  );
}