import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Portifolio.css";
import { projects } from "../components/Projects";

function Portifolio() {
  return (
    <div>
      <Header />
      <section className="main">
        <div>
          <h1>PROJETOS</h1>
        </div>
        <div className="projetos">
          {projects.map(project => {
            return <a target="blank" href={project.link} className="projeto">
              {project.done === 'yes' ? <img alt={project.description} src={project.img} /> : <h2>Em breve</h2>}
              {project.description === '' ? '' : <h3>{project.description}</h3>}
            </a>
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Portifolio;
