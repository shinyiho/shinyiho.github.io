import React from "react";
import Publication from "./Publication";
import { publicationArr } from "./publicationArr";
import "./Publications.css";

function Publications() {
  return (
    <div className="Publications">
      {publicationArr.map((p, i) => (
        <Publication
          key={i}
          name={p.name}
          year={p.year}
          coWriter={p.coWriter}
          pic={p.pic}
          link={p.link}
          publisher={p.publisher}
        />
      ))}
    </div>
  );
}

export default Publications;
