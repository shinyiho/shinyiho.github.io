import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
      <Link to="/cv">
        <button>C.V.</button>
      </Link>
    </div>
  );
}

export default Header;
