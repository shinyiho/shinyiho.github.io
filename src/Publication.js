import React from "react";
import "./publication.css";
function Publication({ coWriter, name, link, pic, year, publisher }) {
  return (
    <div className="Publication">
      <a href={link} target="_blank" rel="noreferrer">
        <h3>{name}</h3>
      </a>
      <div className="Publication-cont">
        <img alt="graph" src={pic}></img>
        <div>
          <div>Authors:{coWriter}</div>
          <div>Publisher:{publisher}</div>
          <div>Date of Publication:{year}</div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
