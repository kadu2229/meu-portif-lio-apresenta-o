import React, { useState } from "react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import backgroundImage from "../assets/backgroundImage.jpg";
import { FaGraduationCap } from "react-icons/fa";
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
        </div>
      </div>

      <div className="selectedContent">

      </div>

      <Footer />
    </div>
  );
}

export default Home;
