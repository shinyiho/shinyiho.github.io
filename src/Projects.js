import React, { useEffect, useState } from "react";
import Project from "./Project";

import "./Projects.css";
import { projectArr } from "./projectArr";

function Projects() {
  const [showloading, setShowloading] = useState(true);
  useEffect(() => {
    let timer1 = setTimeout(() => setShowloading(false), 1200);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div>
      {showloading ? (
        <div className="loading-page">
          <h1>loading</h1>
        </div>
      ) : (
        <div></div>
      )}
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
    </div>
  );
}

export default Projects;
