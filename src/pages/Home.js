import "../styles/Home.css";
import Footer from "../components/Footer";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Cards } from "../components/Cards";

function Home() {

  return (
    <div className="all-page">
      <section className="Home-Section">
        <div className="content">
          <p>FULL-STACK DEVELOPER</p>
          <h2>CARLOS EDUARDO</h2>

          <div className="socialContainer">
            <a href="https://www.linkedin.com/in/carlos-eduardo-s-710555119/" className="linkedin">
              <FaLinkedin /> Linkedin
            </a>
            <a href="https://github.com/kadu2229" className="github">
              <FaGithub /> Github
            </a>
            <a
              target="_blank"
              href="../../Curriculo_Carlos_Eduardo_da_Silva.pdf"
              className="myCv"
            >
              Dowload CV
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
