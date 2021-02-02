import "../css/weather.css";
import locationSVG from "../assets/location-pin.svg";

const Weather = ({ details }) => {
  return (
    <div className="grid-container-weather">
      <div className="grid-item-weather-1">
        <img src={locationSVG} alt="Location" style={{ width: "3rem" }}></img>
      </div>
      <div className="grid-item-weather-2">
        <h3>{details.name}</h3>
      </div>
      <div className="grid-item-weather-3">
        <h3>{details.sys.country}</h3>
      </div>
    </div>
  );
};

export default Weather;
