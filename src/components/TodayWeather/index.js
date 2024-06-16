import { useState } from "react";
import "./index.css";
import { FaCloudRain } from "react-icons/fa";

const TodayWeather = ({ setLocation, onFetchWeather, weatherData }) => {
  const [isLoading, setLoading] = useState("");

  const renderSearch = () => (
    <form>
      <label htmlFor="search"></label>
      <input
        type="search"
        id="search"
        placeholder="search for places..."
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" onClick={onFetchWeather}>
        search
      </button>
    </form>
  );

  const renderWeather = () => {
    const { main, weather, name, clouds } = weatherData;
    return (
      <div className="weather-container">
        <img
          src="./weather_forecast.jpg"
          alt="weather"
          className="weather-image"
        />
        <div>
          <h1>{main.temp} °C</h1>
          <div className="chance-of-rain">
            <img
              src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
              alt="weather"
            />
            <p>{weather[0].description}</p>
          </div>
          <div className="chance-of-rain">
            <FaCloudRain />
            <p>Chances of Rain - {clouds.all} %</p>
          </div>
        </div>
        <div className="location-container">
          <p>{name}</p>
        </div>
      </div>
    );
  };

  console.log("weather", weatherData);
  return (
    <div className="main-container">
      <h1>Weather App</h1>
      {renderSearch()}
      {isLoading ? <p>Loading ... </p> : renderWeather()}
    </div>
  );
};

export default TodayWeather;
