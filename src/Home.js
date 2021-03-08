import React from "react";
import "./Home.css";
import bighead from "./bighead.png";

function Home() {
  return (
    <div>
      <div className="Home">
        <img alt="my big head" src={bighead}></img>
        <h2>This is shin, former Ic design engineer, now software engineer.</h2>
        <p>
          Graduate Institute of Photonics and Optoelectronics, National Taiwan University, Taipei, Taiwan Shin-Yi Ho was
          born in Taiwan in 1992. She received the B.S. degree in electrical engineering from National Cheng Kung
          University, Tainan, Taiwan, in 2014, and the M.S. degree from the Graduate Institute of Photonics and
          Optoelectronics, National Taiwan University, Taipei, Taiwan, in 2016. Her current research interests include
          the fabrication and characterizations of GaN-based high-electron-mobility transistors.
        </p>
      </div>
      <footer>
        2021@ShinyiHo
        <img alt="fbicon" src="https://img.icons8.com/android/24/000000/facebook-new.png" />
        <img alt="githubicon" src="https://img.icons8.com/material-outlined/32/000000/github.png" />
        <div> mail </div>
        <div>tube?</div>
      </footer>
    </div>
  );
}

export default Home;
