import React from "react";
import "../styles/Header.css";
import { AiFillHome } from "react-icons/ai";
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  const ToAbout = () => {
    history.push('/AboutMe')
  }

  const ToHome = () => {
    history.push('/')
  }

  return (
    <header className="HeaderContent">
      <nav className="HeaderNav">
        <button onClick={ToHome} className="buttonsHeader">
          <div>
            <AiFillHome className="homeIcon" />
          </div>
          Home
        </button>
        <div className="aboutMeAndPortifolio">
          <button onClick={ToAbout} type="button" className="buttonsHeader">
            SOBRE MIM
          </button>
          <hr />
          <button className="buttonsHeader">PORTIFÓLIO</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
