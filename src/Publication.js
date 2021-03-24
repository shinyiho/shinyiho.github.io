import React from "react";
import "./publication.css";
function Publication({ coWriter, name, link, abstract, year }) {
  return (
    <div className="Publication">
      <h3>{name}</h3>
      <div>Authors:{coWriter}</div>
      <div className="yearlink">
        <div>Publisher:IEEE</div>
        <div>Date of Publication:{year}</div>
        <a href={link} target="_blank" rel="noreferrer">
          Link
        </a>
      </div>
      <p>{abstract}</p>
    </div>
  );
}

export default Publication;
