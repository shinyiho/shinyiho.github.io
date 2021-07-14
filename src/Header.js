import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  let openCVClicked = () => {
    const url = "https://shinyiho.github.io/cv/";
    window.open(url, "_blank");
  };
  return (
    <div className="Header">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/project">
        <button>Projects</button>
      </Link>
      <Link to="/publications">
        <button>Publications</button>
      </Link>
      <button onClick={openCVClicked}>C.V.</button>
    </div>
  );
}

export default Header;
