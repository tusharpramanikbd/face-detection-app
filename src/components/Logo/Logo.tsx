import Tilt from "react-parallax-tilt";
import "./Logo.css";
import BrainLogo from "./brain.png";

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        style={{ width: "150px", height: "150px" }}
        className="br2 shadow-2"
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="Tilt br2"
        >
          <img style={{ width: "110px" }} src={BrainLogo} alt="Brain Logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
