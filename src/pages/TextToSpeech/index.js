import ProjectCard from "../../components/ProjectCard";
import Header from "../../components/Header"
import watson from "../../imagens/textToSpeech.gif";
import aboutWatson from "./aboutWatson";
import './TextToSpeech.css';

function textToSpeech() {
  return (
    <div className="TextToSpeech">
      <Header/>
      <section className="Projects-section">
      <ProjectCard gif={watson} info={ aboutWatson } />
      </section>
    </div>
  );
}

export default textToSpeech;
