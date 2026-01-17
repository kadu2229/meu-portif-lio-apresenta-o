import React, { useState } from "react";
import "../styles/Cards.css";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Skills } from "../components/Skills";
import { Academic } from "../components/Academic";
import { FaMessage } from "react-icons/fa6";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

export function Cards() {
  const [whichContent, setWhichContent] = useState("sobre");

  const SelectAndRender = () => {
    switch (whichContent) {
      case "sobre":
        return <About />;

      case "projetos":
        return <Projects />;

      case "contato":
        return <Contact />;

      case "skills":
        return <Skills />;

      case "academico":
        return <Academic />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="selectedContent">
        <div className="teste">
          <div
            className={`contentType ${
              whichContent === "sobre" ? "active" : ""
            }`}
            onClick={() =>
              setWhichContent(whichContent === "sobre" ? "" : "sobre")
            }
          >
            <div className="contentInner">
              <span className="contentTitle">SOBRE</span>
              <FaMessage className="cardIcon" />
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
              <GoProjectSymlink className="cardIcon" />
            </div>
          </div>


          <div
            className={`contentType ${
              whichContent === "skills" ? "active" : ""
            }`}
            onClick={() =>
              setWhichContent(whichContent === "skills" ? "" : "skills")
            }
          >
            <div className="contentInner">
              <span className="contentTitle">SKILLS</span>
              <GiSkills className="cardIcon" />
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
              <HiOutlineAcademicCap className="cardIcon" />
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
              <MdOutlineContactPhone className="cardIcon" />
            </div>
          </div>
        </div>
        <div>{SelectAndRender()}</div>
      </div>
    </div>
  );
}
