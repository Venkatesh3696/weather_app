import React from "react";
import { GiSunset } from "react-icons/gi";
import { GiSunrise } from "react-icons/gi";
import "./index.css";

const TodaysHilights = () => {
  return (
    <div>
      <h2>Todays Highlights</h2>
      <div className="cards-container">
        <div className="highlight-card">
          <p>Sunrise & Sunset</p>
          <div className="card-row">
            <GiSunrise size={30} color="orange" />
            <p>6:00 AM</p>
          </div>
          <div className="card-row">
            <GiSunset size={30} color="orange" />
            <p>6:00 PM</p>
          </div>
        </div>
        <div className="highlight-card">
          <p>Wind status</p>
          <p>
            <span>7.34</span> km/h
          </p>
          <p>6:00 AM</p>
        </div>
        <div className="highlight-card">
          <p>Humidity</p>
          <p>12 %</p>
          <p></p>
        </div>
        <div className="highlight-card">
          <p>High & Low Temp</p>
          <p>High 34 c</p>
          <p>Low 22 c</p>
        </div>
        <div className="highlight-card">
          <p>Visibility</p>
          <p>10 km</p>
        </div>
        <div className="highlight-card">
          <p>Pressure</p>
          <h1>1001 mm of Hg</h1>
        </div>
      </div>
    </div>
  );
};

export default TodaysHilights;
