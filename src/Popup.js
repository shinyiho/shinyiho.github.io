import React from "react";
import "./Popup.css";

function Popup({ setshowpopup, pname, psrccode, pdemo, pdes, pgif }) {
  return (
    // <div className="Popup" onMouseLeave={() => setshowpopup(false)}>
    <div className="Popup">
      <button className="closeicon" onClick={setshowpopup}>
        X
      </button>
      <h2>{pname}</h2>
      <div className="video-container">
        {pgif.includes("http") ? (
          <iframe
            width="100%"
            height="100%"
            src={pgif}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <video width="100%" height="100%" autoPlay controls>
            <source src={pgif} type="video/mp4"></source>
          </video>
        )}
      </div>
      <div className="popupinfo">
        <p>{pdes}</p>
        <a href={pdemo} target="_blank" rel="noreferrer">
          DEMO
        </a>
        <br></br>
        <a href={psrccode} target="_blank" rel="noreferrer">
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Popup;
