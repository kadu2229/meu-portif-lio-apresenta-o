import React, { useState } from "react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import backgroundVideo from "../assets/backgroundVideo.mp4";
import { FaGraduationCap } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  const [whichContent, setWhichContent] = useState('');

  return (
    <div className="all-page">
      <section className="Home-Section">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </section>

      <div className="content">
        <p>FULL-STACK DEVELOPER</p>
        <h2>CARLOS EDUARDO</h2>

        <div className="socialContainer">
          <a className="social"><FaLinkedin /> Linkedin</a>
          <a className="social"><FaGithub /> Github</a>
        </div>
      </div>

      <div className="selectedContent">
        <div className="contentType"><FaGraduationCap /></div>
        <div className="contentType">2</div>
        <div className="contentType">3</div>
        <div className="contentType">4</div>
        <div className="contentType">5</div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
