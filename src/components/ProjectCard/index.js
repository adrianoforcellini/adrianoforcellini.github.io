import React, { useState } from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { gif, info } = props;
  console.log(info)
  return (
    <section className="project-card">
      <div className="gif-container">
        <img className="gif" alt="project-gif" src={gif}/>
      </div>
      <div className="project-info">
        <h3>{info.title}</h3>
        <h4>{info.technologies}</h4>
        <p>{info.info}</p>
      </div>
    </section>
  );
}

export default ProjectCard;
