import React, { useState } from "react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import backgroundImage from "../assets/backgroundImage.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  const [whichContent, setWhichContent] = useState("");

  return (
    <div className="all-page">
      <section className="Home-Section">
        <img className="background-image" src={backgroundImage}></img>
      </section>

      <div className="content">
        <p>FULL-STACK DEVELOPER</p>
        <h2>CARLOS EDUARDO</h2>

        <div className="socialContainer">
          <a className="linkedin">
            <FaLinkedin /> Linkedin
          </a>
          <a className="github">
            <FaGithub /> Github
          </a>
          <a
            target="_blank"
            href="../../Curriculo_Carlos_Eduardo_da_Silva.pdf"
            className="myCv"
          >
            Dowload CV
          </a>
        </div>
      </div>

      <div className="selectedContent">
        <div
          className={`contentType ${whichContent === "sobre" ? "active" : ""}`}
          onClick={() =>
            setWhichContent(whichContent === "sobre" ? "" : "sobre")
          }
        >
          <div className="contentInner">
            <span className="contentTitle">SOBRE MIM</span>
            <p className="contentText">Conteúdo do sobre mim</p>
          </div>
        </div>

        <div
          className={`contentType ${
            whichContent === "projetos" ? "active" : ""
          }`}
          onClick={() =>
            setWhichContent(whichContent === "projetos" ? "" : "projetos")
          }
        >
          <div className="contentInner">
            <span className="contentTitle">PROJETOS</span>
            <p className="contentText">Conteúdo dos projetos</p>
          </div>
        </div>

        <div
          className={`contentType ${
            whichContent === "contato" ? "active" : ""
          }`}
          onClick={() =>
            setWhichContent(whichContent === "contato" ? "" : "contato")
          }
        >
          <div className="contentInner">
            <span className="contentTitle">CONTATO</span>
            <p className="contentText">Conteúdo de contato</p>
          </div>
        </div>

        <div
          className={`contentType ${whichContent === "skills" ? "active" : ""}`}
          onClick={() =>
            setWhichContent(whichContent === "skills" ? "" : "skills")
          }
        >
          <div className="contentInner">
            <span className="contentTitle">SKILLS</span>
            <p className="contentText">Conteúdo das skills</p>
          </div>
        </div>

        <div
          className={`contentType ${
            whichContent === "academico" ? "active" : ""
          }`}
          onClick={() =>
            setWhichContent(whichContent === "academico" ? "" : "academico")
          }
        >
          <div className="contentInner">
            <span className="contentTitle">ACADÊMICO</span>
            <p className="contentText">Conteúdo acadêmico</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
