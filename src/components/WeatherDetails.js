import "../css/weatherDetails.css";
import weatherSVG from "../assets/weather.svg";

const WeatherDetails = () => {
  return (
    <div className="grid-container-weather-details">
      <div>
        <img src={weatherSVG} alt="Logo" style={{ width: "3rem" }}></img>
      </div>
      <div>
        <h3>Clear</h3>
        <p>clear sky</p>
      </div>
      <div>
        <h3>Temperature</h3>
        <h3>value</h3>
      </div>
      <div>
        <h3>Feels like</h3>
        <h3>value</h3>
      </div>
      <div>
        <h3>Minimum</h3>
        <h3>value</h3>
      </div>
      <div>
        <h3>Maximum</h3>
        <h3>value</h3>
      </div>
      <div>
        <h3>Pressure</h3>
        <h3>value</h3>
      </div>
      <div>
        <h3>Humidity</h3>
        <h3>value</h3>
      </div>
    </div>
  );
};

export default WeatherDetails;
