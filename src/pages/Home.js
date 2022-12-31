import React from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AiOutlineArrowDown, AiFillHtml5,AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BsFillBootstrapFill,BsLinkedin } from "react-icons/bs";
import { SiJest } from "react-icons/si";

function Home() {
  return (
    <div className="all-page">
      <Header />
      <section className="Home-Section">
        <div className="titulos">
          <h1>CARLOS EDUARDO</h1>
          <h3>FRONT-END DEVELOPER</h3>
          <div className="contacts-containter">
            <a
              className="contacts"
              href="https://www.linkedin.com/in/carlos-s-710555119/"
            >
              linkedin
              <BsLinkedin />
            </a>
            <a
              className="contacts"
              href="https://github.com/kadu2229?tab=repositories"
            >
              github
              <AiFillGithub />
            </a>
          </div>
        </div>
        <img
          src="https://ouch-cdn2.icons8.com/vZD-nOO0-rKGloPBW0WjLQF-i8hfkpa7QWY_3L4YTGA/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzAx/L2Y1ZWI5ZGEwLTM3/ZWMtNDUxYy1iODNl/LTVjMzc1NGU5NjQx/NC5zdmc.png"
          alt="programer-img"
        />
      </section>
      <section className="Home-Skills">
        <div className="skills-h1">
          <h1>Minhas Skills São</h1>
          <AiOutlineArrowDown />
        </div>
        <section className="skills">
          <div className="skills-list-html">
            <AiFillHtml5 />
            <h2>HTML</h2>
            <p>
              HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção
              mais básico da web. Define o significado e a estrutura do conteúdo
              da web.
            </p>
          </div>
          <div className="skills-list-css">
            <DiCss3 />
            <h2>CSS</h2>
            <p>
              CSS (Folhas de Estilo em Cascata) permite a você criar páginas web
              agradáveis aos olhos.
            </p>
          </div>
          <div className="skills-list-js">
            <TbBrandJavascript />
            <h2>JAVASCRIPT</h2>
            <p>
              JavaScript é uma linguagem de programação que permite a você
              implementar itens complexos em páginas web.
            </p>
          </div>
          <div className="skills-list-react">
            <FaReact />
            <h2>REACT</h2>
            <p>
              O React é a biblioteca mais popular do JavaScript e é usada para
              construir uma interface de usuário (IU).
            </p>
          </div>
          <div className="skills-list-redux">
            <SiRedux />
            <h2>REDUX</h2>
            <p>
              Redux é uma biblioteca para armazenamento de estados de aplicações
              JavaScript
            </p>
          </div>
          <div className="skills-list-bootstrap">
            <BsFillBootstrapFill />
            <h2>BOOTSTRAP</h2>
            <p>
              Bootstrap é um framework front-end que fornece estruturas de CSS
              para a criação de sites e aplicações responsivas de forma rápida e
              simples.
            </p>
          </div>
          <div className="skills-list-jest">
            <SiJest />
            <h2>JEST</h2>
            <p>
              Jest é um framework de teste unitário de código aberto em
              JavaScript criado pelo Facebook a partir do framework Jasmine.
              Jest é uma das ferramentas de teste unitário mais difundidas
              dentro da comunidade de JavaScript.
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
