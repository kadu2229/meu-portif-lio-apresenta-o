import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Portifolio.css";

function Portifolio() {
  const [seeMore, setSeeMore] = useState(true);
  const [lessProjects] = useState([1, 2, 3, 4]);
  const [moreProjects] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const upArray = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div>
      <Header />
      <section className="main">
        <div>
          <h1>PROJETOS</h1>
        </div>
        <div className="projetos">
          {seeMore === true
            ? lessProjects.map((projeto) => {
                return (
                  <div className="projeto">
                    <h2>EM BREVE</h2>
                  </div>
                );
              })
            : moreProjects.map((projeto) => {
                return (
                  <div className="projeto">
                    <h2>EM BREVE</h2>
                  </div>
                );
              })}
        </div>
        <button className="seeHow" onClick={upArray}>
          {seeMore === true ? <p>VER MAIS</p> : <p>VER MENOS</p>}
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Portifolio;
