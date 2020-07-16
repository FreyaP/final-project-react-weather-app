import React from "react";
import SearchEngine from "./SearchEngine";
import "./WeatherCurrent.css";

export default function WeatherCurrent() {
  return (
    <div className="Weather">
      <h1 className="current">Current</h1>
      <hr />
      <h1 className="location">Vancouver, BC</h1>
      <h5 className="date">Tues. 3rd July, 3pm</h5>
      <div className="clear-fix weatherMain">
        <img
          src="https://www.iconsdb.com/icons/preview/white/rain-xxl.png"
          alt="rain"
        ></img>

        <span className="temperature">13</span>
        <span className="units">°C</span>

        <span className="temperature fahrenheit">55</span>
        <span className="units">°F</span>
      </div>
      <h3 className="description">Rain Showers</h3>
      <ul>
        <li>Chance of Rain 28%</li>
        <li>Wind 3km/h</li>
        <li>Humidity 70%</li>
      </ul>
      <SearchEngine />
    </div>
  );
}
