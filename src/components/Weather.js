import "../css/weather.css";
import locationSVG from "../assets/location-pin.svg";

const Weather = () => {
  return (
    <div className="grid-container-weather">
      <div className="grid-item-weather-1">
        <img src={locationSVG} alt="Location" style={{ width: "3rem" }}></img>
      </div>
      <div className="grid-item-weather-2">
        <h3>City</h3>
      </div>
      <div className="grid-item-weather-3">
        <h3>Region</h3>
      </div>
      <div className="grid-item-weather-4">
        <h3>Country</h3>
      </div>
    </div>
  );
};

export default Weather;
