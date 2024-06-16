import "./App.css";
import Header from "./components/Header";
import TodaysHilights from "./components/TodaysHighlights";
import TodayWeather from "./components/TodayWeather";

import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState({
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 290.99,
      feels_like: 290.63,
      temp_min: 289.1,
      temp_max: 293.15,
      pressure: 1002,
      humidity: 69,
    },
    visibility: 10000,
    wind: {
      speed: 6.69,
      deg: 210,
    },
    clouds: {
      all: 75,
    },
    dt: 1718368008,
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

  const onFetchWeather = (e) => {
    e.preventDefault();
    const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${process.env.REACT_APP_APIKEY}`;
    console.log("fetchUrl", fetchUrl);
    if (location) {
      try {
        fetch(fetchUrl)
          .then((response) => response.json())
          .then((result) => {
            setWeatherData(result);
          });
      } catch (err) {
        console.error("error fetching weather", err);
      } finally {
        setLocation("");
      }
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"} `}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="app-inner-container">
        <TodayWeather
          location={location}
          setLocation={setLocation}
          onFetchWeather={onFetchWeather}
          weatherData={weatherData}
          isDarkMode={isDarkMode}
        />
        <div className="insights-container">
          <TodaysHilights isDarkMode={isDarkMode} weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
