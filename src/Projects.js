import React from "react";
import Project from "./Project";

import "./Projects.css";
import { projectArr } from "./projectArr";

function Projects() {
  return (
    <div className="Projects">
      {projectArr.map((p, i) => (
        <Project
          key={i}
          pimg={p.image}
          pname={p.name}
          psrccode={p.srcCode}
          pdemo={p.demo}
          pdes={p.description}
          pgif={p.gif}
        />
      ))}
    </div>
  );
}

export default Projects;
