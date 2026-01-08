import React from "react";
import "../styles/AboutMe.css";
import { AiOutlineArrowDown } from "react-icons/ai";

function AboutMe() {
  return (
    <div className="About-Body">
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
            <h2>Minha jornada na área de TI</h2>
            <p>
              Olá! Meu nome é Carlos e sou universitário da área de Tecnologia
              da Informação. Há dois anos, comecei a estudar programação e,
              desde então, tenho me dedicado diariamente a aprender, praticar e
              evoluir nessa área que tanto me fascina. Ao longo desse tempo,
              tive contato com diversas linguagens, como Python, JavaScript e
              Java, e desenvolvi projetos que me ajudaram a entender melhor o
              funcionamento da lógica de programação e o desenvolvimento de
              software. Além das aulas na universidade, busquei cursos extras,
              participei de comunidades online e eventos para ampliar meus
              conhecimentos e estar sempre por dentro das novidades do setor.
              Agora, estou em busca da minha primeira oportunidade no mercado de
              trabalho. Quero aplicar tudo o que aprendi até aqui, contribuir
              com projetos reais, aprender com profissionais experientes e
              continuar crescendo como desenvolvedor. Sei que ainda tenho muito
              a aprender, mas estou preparado para os desafios e motivado a dar
              o meu melhor. Sou apaixonado por tecnologia, gosto de resolver
              problemas e acredito que a prática é a melhor forma de evoluir.
              Estou pronto para dar o próximo passo e transformar meu
              conhecimento em resultados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
