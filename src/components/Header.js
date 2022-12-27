import React from "react";
import "../styles/Header.css";
import { AiFillHome } from "react-icons/ai";

function Header() {
  return (
    <div className="HeaderContent">
      <nav className="HeaderNav">
        <button className="buttonsHeader">
          <div>
            <AiFillHome className="homeIcon" />
          </div>
          Home
        </button>
        <div className="aboutMeAndPortifolio">
          <button className="buttonsHeader">SOBRE MIM</button>
          <hr />
          <button className="buttonsHeader">PORTIFÓLIO</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
