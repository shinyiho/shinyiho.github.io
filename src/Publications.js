import React from "react";
import Publication from "./Publication";
import { publicationArr } from "./publicationArr";
import "./Publications.css";

function Publications() {
  return (
    <div className="Publications">
      {publicationArr.map((p, i) => (
        <Publication key={i} name={p.name} year={p.year} coWriter={p.coWriter} abstract={p.abstract} link={p.link} />
      ))}
    </div>
  );
}

export default Publications;
