import React, { useState } from "react";
import "./ProjectCard.css";
import ButtonsContainer from "../ButtonsContainer";

function ProjectCard(props) {
  const { gif, info } = props;
  console.log(info);
  return (
    <section className="project-card">
      <div className="gif-container">
        <img className="gif" alt="project-gif" src={gif} />
      </div>
      <div className="project-info">
        <h3>{info.title}</h3>
        <h4>{info.technologies}</h4>
        <p>{info.info}</p>
        <ButtonsContainer url={info.url} next_project={info.next_project} />
      </div>
    </section>
  );
}

export default ProjectCard;
