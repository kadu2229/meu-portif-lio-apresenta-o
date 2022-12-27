import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home-Section">
      <div className="titulos">
        <h1>Olá, eu sou o Carlos</h1>
        <h2>e sou um desenvolvedor front-end.</h2>
      </div>
      <img
        src="https://ouch-cdn2.icons8.com/vZD-nOO0-rKGloPBW0WjLQF-i8hfkpa7QWY_3L4YTGA/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzAx/L2Y1ZWI5ZGEwLTM3/ZWMtNDUxYy1iODNl/LTVjMzc1NGU5NjQx/NC5zdmc.png"
        alt="programer-img"
      />
    </div>
  );
}

export default Home;
