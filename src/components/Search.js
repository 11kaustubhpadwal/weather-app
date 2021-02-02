import "../css/search.css";
import { useState } from "react";

const Search = ({ getWeather, loading }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    getWeather(city);
  };

  return (
    <div className="grid-container-search">
      <div className="grid-item-search-1">
        <input
          type="text"
          placeholder="e.g. warsaw"
          value={city}
          onChange={handleChange}
        ></input>
      </div>
      <div className="grid-item-search-2">
        {!loading && city !== "" && (
          <button onClick={handleClick}>Show me the weather!</button>
        )}
        {loading ||
          (city === "" && (
            <button onClick={handleClick} disabled>
              Show me the weather!
            </button>
          ))}
      </div>
    </div>
  );
};

export default Search;
