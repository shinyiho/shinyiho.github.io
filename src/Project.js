import React, { useState } from "react";
import Popup from "./Popup";
import "./Project.css";

function Project({ pimg, pname, psrccode, pdemo, pdes, pgif }) {
  const [hover, setHover] = useState(false);
  const [showpopup, setShowpopup] = useState(false);

  let setshowpopup = () => {
    setShowpopup(false);
  };

  return (
    <div className="Project">
      {hover ? (
        <div className="Project_name" onClick={() => setShowpopup(true)} onMouseLeave={() => setHover(false)}>
          name
        </div>
      ) : (
        <img alt="project_img" className="Project_img" onMouseEnter={() => setHover(true)} src={pimg}></img>
      )}
      {showpopup ? (
        <Popup pname={pname} psrccode={psrccode} pdemo={pdemo} pdes={pdes} pgif={pgif} setshowpopup={setshowpopup} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Project;
