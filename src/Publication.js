import React from "react";
import "./publication.css";
function Publication({ coWriter, name, link, abstract, year }) {
  return (
    <div className="Publication">
      <h2>{name}</h2>
      <h3>Authors:{coWriter}</h3>
      <div className="yearlink">
        <div>Publisher:IEEE</div>
        <div>Date of Publication:{year}</div>
        <a href={link} target="_blank">
          Link
        </a>
      </div>
      <p>{abstract}</p>
    </div>
  );
}

export default Publication;
