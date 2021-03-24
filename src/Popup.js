import React from "react";
import "./Popup.css";

function Popup({ setshowpopup, pname, psrccode, pdemo, pdes, pgif }) {
  // const [readytochangep, setReadytochangep] = useState(false);
  return (
    <div className="Popup" onMouseLeave={() => setshowpopup(false)}>
      <div className="popupL">
        {pgif.includes("http") ? (
          <iframe
            width="560"
            height="315"
            src={pgif}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          // <img src={pgif} alt="this slowpoke moves" width="250px" />
          <video width="800px" height="600px" autoPlay controls>
            <source src={pgif} type="video/mp4"></source>
          </video>
        )}
      </div>
      <div className="popupR">
        {/* <div>{pname}</div> */}
        <p>{pdes}</p>
        <a href={pdemo} target="_blank" rel="noreferrer">
          DEMO
        </a>
        <br></br>
        <a href={psrccode} target="_blank" rel="noreferrer">
          Source Code
        </a>
        <div onClick={setshowpopup}>-</div>
      </div>
    </div>
  );
}

export default Popup;
