import React from "react";
import "./publication.css";
function Publication({ coWriter, name, link, abstract, year, publisher }) {
  return (
    <div className="Publication">
      <a href={link} target="_blank" rel="noreferrer">
        <h3>{name}</h3>
      </a>

      <div>Authors:{coWriter}</div>
      <div className="year">
        <div>Publisher:{publisher}</div>
        <div>Date of Publication:{year}</div>
      </div>
      <p>{abstract}</p>
    </div>
  );
}

export default Publication;
