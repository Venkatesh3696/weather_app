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
      lon: 77.2167,
      lat: 28.6667,
    },
    weather: [
      {
        id: 721,
        main: "Haze",
        description: "haze",
        icon: "50n",
      },
    ],
    base: "stations",
    main: {
      temp: 39.05,
      feels_like: 38.33,
      temp_min: 39.05,
      temp_max: 39.05,
      pressure: 1000,
      humidity: 21,
    },
    visibility: 4000,
    wind: {
      speed: 1.54,
      deg: 240,
    },
    clouds: {
      all: 0,
    },
    dt: 1718557666,
    sys: {
      type: 1,
      id: 9165,
      country: "IN",
      sunrise: 1718495581,
      sunset: 1718545846,
    },
    timezone: 19800,
    id: 1273294,
    name: "Delhi",
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
