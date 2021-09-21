import React, { useState } from "react";
import "./ProjectCard.css";
import ButtonsContainer from "../ButtonsContainer";

function ProjectCard(props) {
  const { gif, info } = props;
  return (
    <section className="project-card">
      <div className="gif-container">
        <img className="gif" alt="project-gif" src={gif} />
      </div>
      <div className="project-info">
          <h3>{info? info.title :'Title' }</h3>
          <h4>{info? info.technologies: 'Tecnologias'}</h4>
          <p>{info? info.info : 'Info'}</p>
        <ButtonsContainer url={info? info.url : 'url'}
         next_project={info? info.next_project: 'next-project'} />
      </div>
    </section>
  );
}

export default ProjectCard;
