import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/AboutMe.css";
import { AiOutlineArrowDown } from 'react-icons/ai'

function AboutMe() {
  return (
    <div className="About-Body">
      <Header />
      <section className="aboutMe">
        <div className="aboutIMG">
          <img
            alt="programing-img"
            src="https://i.pinimg.com/originals/78/5a/1b/785a1b9c359640da6bc9cfe3670b42ba.png"
          ></img>
          <AiOutlineArrowDown />
        </div>

        <div className="MyJorney">
          <div>
            <h2>MINHA JORNADA</h2>
            <p>
              Sempre fui apaixonado por tecnologia desde pequeno, comecei
              aprendendo a montar e desmonstar computadores, na adolescência
              comecei a aprender a desbloquear consoles, e depois do ensino
              médio cursei design gráfico. Após terminar o curso começei a
              trabalhar na área mas ainda não sentia que aquilo era o que eu
              queria até que em 2021 eu conheci o professor Gustavo guanabara e
              começei a fazer todos os cursos da plataforma curso em vídeo, mas
              ainda não sentia que tinha conhecimento o suficiente pra ingressar
              no mercado, então comecei a estudar por mim mesmo e me aprofundar
              o máximo possível no máximo de tecnologias possíveis porém... me
              faltava direcionamento para que as tecnologias que eu aprendia se
              suplementassem. Foi então em 2022 que eu conheci a
              <span className="trybe">TRYBE</span> e descobri minha paixão pelo
              frot-end e aprendi a habilidade de aprender e agora que sou
              oficialmente um dev front-end estou atrás da minha primeira
              oportunidade oficial no mercado de trabalho.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutMe;
