import codinggif from "./assets/video_trim/20210715cut.mp4";
import "./Landingpg.css";
import { Link } from "react-router-dom";
function Landingpg() {
  return (
    <Link className="Landingpg" to="/home">
      <video width="100%" height="100%" autoPlay loop>
        <source src={codinggif} type="video/mp4"></source>
      </video>
    </Link>
  );
}

export default Landingpg;
