import weatherSVG from "../assets/weather.svg";
import "../css/header.css";

const Header = () => {
  return (
    <div className="grid-container">
      <div className="grid-item-1">
        <img src={weatherSVG} alt="Logo" style={{ width: "3rem" }}></img>
      </div>
      <div className="grid-item-2">
        <h1>My Weather Buddy</h1>
      </div>
    </div>
  );
};

export default Header;
