import React, { useState } from "react";
import "./index.css";

const Dashboard = ({ apidetails }) => {
  const [location, setLocation] = useState("");
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

  const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.APIKEY}`;

  const onFetchWeather = (e) => {
    e.preventDefault();
    console.log(fetchUrl);
    // fetch(fetchUrl)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setWeatherData(result);
    //     console.log("fetchedData", result);
    //   })
    //   .catch((err) => console.error("error fetching weather", err));
  };

  const renderSearch = () => (
    <form>
      <label htmlFor="search"></label>
      <input
        type="search"
        id="search"
        placeholder="search city"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" onClick={onFetchWeather}>
        search
      </button>
    </form>
  );

  const renderWeather = () => {
    const { main, weather, name, visibility, wind } = weatherData;
    return (
      <div className="weather-container">
        <div>
          <p>location {name}</p>
        </div>
        <div>
          <p>temperature : {main.temp}</p>
          <p>feels like : {main.feels_like}</p>
          <p>min temperature : {main.temp_min}</p>
          <p>max temperature : {main.temp_max}</p>
          <p>pressure : {main.pressure}</p>
          <p>humidity : {main.humidity}</p>
        </div>
        <div>
          <p>{weather[0].main}</p>
          <p>{weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
            alt="weather"
          />
          <p>Visibility : {visibility} m </p>
          <p>wind speed : {wind.speed} km/h </p>
        </div>
      </div>
    );
  };

  console.log("weather", weatherData);
  return (
    <div className="main-container">
      <h1>Weather App</h1>
      {renderSearch()}
      {renderWeather()}
    </div>
  );
};

export default Dashboard;
