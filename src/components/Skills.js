import React, { useState } from "react";
import "../styles/CardSelectedContent.css";

const skillsData = {
  React: "Biblioteca JavaScript para criação de interfaces reativas e componentizadas.",
  "JavaScript":
    "Linguagem base da web moderna, utilizando recursos como async/await e modules.",
  Redux: "Gerenciamento de estado global para aplicações React.",
  HTML5: "Estrutura semântica para páginas web.",
  CSS3: "Estilização responsiva com Flexbox e Grid.",
  "Node.js": "Ambiente de execução JavaScript no servidor.",
  Express: "Framework minimalista para criação de APIs REST.",
  JWT: "Autenticação baseada em tokens para aplicações seguras.",
  "REST APIs": "Arquitetura para comunicação entre front-end e back-end.",
  MVC: "Padrão de arquitetura para organização do código.",
  Jest: "Framework de testes automatizados para aplicações JavaScript.",
  "C#": "Linguagem fortemente tipada usada no back-end.",
  MySQL: "Banco de dados relacional amplamente utilizado.",
  PostgreSQL: "Banco de dados relacional avançado.",
  TiDB: "Banco de dados SQL distribuído.",
  Git: "Sistema de controle de versão.",
  GitHub: "Hospedagem e colaboração de repositórios Git.",
  Cloudinary: "Serviço de gerenciamento e otimização de imagens."
};

const frontEnd = ["React", "Redux", "HTML5", "CSS3"];
const backEnd = ["Node.js", "Express", "JWT", "REST APIs", "MVC"];
const tests = ["Jest"];
const languages = ["JavaScript", "C#"];
const databases = ["MySQL", "PostgreSQL", "TiDB"];
const tools = ["Git", "GitHub", "Cloudinary"];

export function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleClick = (skill) => {
    setActiveSkill(skill === activeSkill ? null : skill);
  };

 const renderList = (list) =>
  list.map((skill) => (
    <div key={skill} className="skillItem">
      <span onClick={() => handleClick(skill)}>
        {skill}
      </span>

      <p
        className={`skillDescription ${
          activeSkill === skill ? "open" : ""
        }`}
      >
        {skillsData[skill]}
      </p>
    </div>
  ));


  return (
    <div className="skillsBody">
      <h1>Skills</h1>

      <div className="skillsGroup">
        <h2>Front-end</h2>
        <div className="skillsList">{renderList(frontEnd)}</div>
      </div>

      <div className="skillsGroup">
        <h2>Back-end</h2>
        <div className="skillsList">{renderList(backEnd)}</div>
      </div>

      <div className="skillsGroup">
        <h2>Testes</h2>
        <div className="skillsList">{renderList(tests)}</div>
      </div>

      <div className="skillsGroup">
        <h2>Linguagens</h2>
        <div className="skillsList">{renderList(languages)}</div>
      </div>

      <div className="skillsGroup">
        <h2>Bancos de Dados</h2>
        <div className="skillsList">{renderList(databases)}</div>
      </div>

      <div className="skillsGroup">
        <h2>Ferramentas</h2>
        <div className="skillsList">{renderList(tools)}</div>
      </div>
    </div>
  );
}