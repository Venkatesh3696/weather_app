import React from "react";
import { FaWind } from "react-icons/fa";
import "./index.css";

const TodaysHilights = ({ weatherData }) => {
  const { sys, wind, main, visibility } = weatherData;
  const sunrise = new Date(sys.sunrise * 1000);
  const sunriseTime = (
    <p>
      {sunrise.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  );
  const sunset = new Date(sys.sunset * 1000);
  const sunsetTime = (
    <p>
      {sunset.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  );
  return (
    <div>
      <h2>Todays Highlights</h2>
      <div className="cards-container">
        <div className="highlight-card sunrise">
          <p>Sunrise & Sunset</p>
          {sunriseTime}
          {sunsetTime}
        </div>
        <div className="highlight-card wind">
          <p>Wind status</p>
          <FaWind color="orange" size={30} />
          <p>
            <span>{wind.speed}</span> km/h
          </p>
        </div>
        <div className="highlight-card himidity">
          <p>Humidity</p>
          <p>{main.humidity} %</p>
          <p></p>
        </div>
        <div className="highlight-card temperature ">
          <p>High & Low Temp</p>
          <p>High {main.temp_max} °C</p>
          <p>Low {main.temp_min} °C</p>
        </div>
        <div className="highlight-card visibility">
          <p>Visibility</p>
          <p>{visibility / 1000} Km </p>
        </div>
        <div className="highlight-card pressure">
          <p>Pressure</p>
          <p>{main.pressure} mm of Hg</p>
        </div>
      </div>
    </div>
  );
};

export default TodaysHilights;
