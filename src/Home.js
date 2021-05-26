import React from "react";
import "./Home.css";
import bighead from "./bighead.png";

function Home() {
  return (
    <div>
      <div className="Home">
        <img alt="my big head" src={bighead}></img>
        <p>
          Hi! This is Shin, a former IC design engineer, now a software engineer. Previously working for Himax
          Technologies as a system engineer and United Microelectronics Corporation as a process engineering integration
          intern. I received the M.S. degree in the Graduate Institute of Photonics and Optoelectronics at National
          Taiwan University and the B.S. degree in the Electrical engineering at National Cheng Kung University. I'm
          interested in technology and ....
        </p>
      </div>
      <footer>
        2021 @ ShinyiHo
        <img alt="fbicon" src="https://img.icons8.com/android/24/000000/facebook-new.png" />
        <img alt="githubicon" src="https://img.icons8.com/material-outlined/32/000000/github.png" />
        <div> mail </div>
        <div>tube?</div>
      </footer>
    </div>
  );
}

export default Home;
