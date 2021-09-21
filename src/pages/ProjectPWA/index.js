import React, { useState } from "react";
import "./ProjectPWA.css";
import ProjectCard from "../../components/ProjectCard";
import Header from "../../components/Header"
import PWA from "../../imagens/PWA.gif";
import aboutPWA from "./about";
import ButtonsContainer from "../../components/ButtonsContainer";

function ProjectPWA() {

  return (
    <div className="Projects">
      <Header/>
      <section className="Projects-section">
      <ProjectCard gif={PWA} info={aboutPWA}/>
      </section>
    </div>
  );
}

export default ProjectPWA;
