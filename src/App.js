import Header from "./components/Header";
import Info from "./components/Info";
import Search from "./components/Search";
import Loader from "./components/Loader";
import Weather from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";
import Error from "./components/Error";
import Credits from "./components/Credits";

import { useState } from "react";

import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
      });

      setCurrentCity(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(
        "An error occurred. Please check the city's spelling and try again."
      );
      setCurrentCity(null);
    }
  };

  return (
    <div>
      <Header />
      <Info />
      <Search getWeather={getWeather} loading={loading} />
      {loading && <Loader />}
      {!loading && currentCity !== null && <Weather details={currentCity} />}
      {!loading && currentCity !== null && (
        <WeatherDetails details={currentCity} />
      )}
      {!loading && error && currentCity === null && <Error error={error} />}
      <Credits />
    </div>
  );
};

export default App;
