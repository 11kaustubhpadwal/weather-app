import "../css/weatherDetails.css";

const WeatherDetails = ({ details }) => {
  return (
    <div className="grid-container-weather-details">
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
          alt="Logo"
          className="weather-icon"
        ></img>
      </div>
      <div>
        <h3>{details.weather[0].main}</h3>
        <p style={{ padding: "20px 0 0 0" }}>
          {details.weather[0].description}
        </p>
      </div>
      <div>
        <h3>Temperature</h3>
        <h3 style={{ padding: "20px 0 0 0" }}>{details.main.temp} °C</h3>
      </div>
      <div>
        <h3>Feels like</h3>
        <h3 style={{ padding: "20px 0 0 0" }}>{details.main.feels_like} °C</h3>
      </div>
      <div>
        <h3>Minimum</h3>
        <h3 style={{ padding: "20px 0 0 0" }}>{details.main.temp_min} °C</h3>
      </div>
      <div>
        <h3>Maximum</h3>
        <h3 style={{ padding: "20px 0 0 0" }}>{details.main.temp_max} °C</h3>
      </div>
      <div>
        <h3>Pressure</h3>
        <h3 style={{ padding: "20px 0 0 0" }}>{details.main.pressure} Pa</h3>
      </div>
      <div>
        <h3>Humidity</h3>
        <h3 style={{ padding: "20px 0 0 0" }}>{details.main.humidity} g/m3</h3>
      </div>
    </div>
  );
};

export default WeatherDetails;
