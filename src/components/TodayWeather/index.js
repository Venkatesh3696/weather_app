import { useState } from "react";
import "./index.css";
import { FaCloudRain } from "react-icons/fa";

const TodayWeather = ({ location, setLocation }) => {
  const [isLoading, setLoading] = useState("");
  const [weatherData, setWeatherData] = useState({
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
    base: "stations",
    main: {
      temp: 291.73,
      feels_like: 291.16,
      temp_min: 288.49,
      temp_max: 292.73,
      pressure: 1001,
      humidity: 58,
    },
    visibility: 10000,
    wind: {
      speed: 7.72,
      deg: 210,
    },
    clouds: {
      all: 40,
    },
    dt: 1718379397,
    sys: {
      type: 2,
      id: 2091269,
      country: "GB",
      sunrise: 1718336572,
      sunset: 1718396336,
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200,
  });

  const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${process.env.REACT_APP_APIKEY}`;
  console.log("fetchUrl", fetchUrl);
  const onFetchWeather = (e) => {
    e.preventDefault();
    console.log(fetchUrl);
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((result) => {
        setWeatherData(result);
        console.log("fetchedData", result);
      })
      .catch((err) => console.error("error fetching weather", err));
  };

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
    const { main, weather, name, visibility, wind, clouds } = weatherData;
    return (
      <div className="weather-container">
        <div>
          {/* <p>{weather[0].main}</p> */}
          <img
            src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
            alt="weather"
          />
          <p>{weather[0].description}</p>
          <FaCloudRain />
          <p>Rain - {clouds.all} </p>
        </div>
        <p>location {name}</p>
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
