import ProjectCard from "../../components/ProjectCard";
import Header from "../../components/Header"
import googleAPI from "../../imagens/googleAPI.gif";
import aboutMapsAPI from "./aboutMapsAPI";
import "./MapsAPI.css";

function MapsAPI() {
  return (
    <div className="MapsAPI">
      <Header/>
      <section className="Projects-section">
      <ProjectCard gif={googleAPI} info={ aboutMapsAPI }/>
      </section>
    </div>
  );
}

export default MapsAPI;
