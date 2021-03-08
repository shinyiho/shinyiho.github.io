import React from "react";
import "./Popup.css";

function Popup({ setshowpopup, pname, psrccode, pdemo, pdes, pgif }) {
  return (
    <div className="Popup">
      <div className="popupL">
        {pgif.includes("mp4") ? (
          <video width="400px" height="300px" autoPlay>
            <source src={pgif} type="video/mp4"></source>
          </video>
        ) : (
          <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width="250px" />
        )}
      </div>
      <div className="popupR">
        <div>{pname}</div>
        <p>{pdes}</p>
        <a href={pdemo} target="_blank">
          DEMO
        </a>
        <br></br>
        <a href={psrccode} target="_blank">
          Source Code
        </a>
        <div onClick={setshowpopup}>vanish</div>
      </div>
    </div>
  );
}

export default Popup;
