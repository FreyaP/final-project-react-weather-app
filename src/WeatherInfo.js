import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    return (
        <div className="Weather">
            <h1 className="current">Current</h1>
        <hr />
        <h1 className="location">
          {props.data.name}, {props.data.country}
        </h1>
        <h5 className="date">
          <FormattedDate date={props.data.date} />
        </h5>
        <div className="clear-fix weatherMain">
          <img
            src="https://www.iconsdb.com/icons/preview/white/rain-xxl.png"
            alt="weather icon"
          ></img>

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>

          <span className="temperature fahrenheit">55</span>
          <span className="units">°F</span>
        </div>
        <h3 className="description text-capitalize">
          {props.data.description}
        </h3>
        <ul>
          <li>
            <span className="weatherDetails">Feels Like:</span>{" "}
            <strong>{Math.round(props.data.feelsLike)}°C</strong>
          </li>
          <li>
            <span className="weatherDetails">Wind:</span>{" "}
            <strong>{props.data.wind}km/h</strong>
          </li>
          <li>
            <span className="weatherDetails">Humidity:</span>
            <strong> {props.data.humidity}%</strong>
          </li>
        </ul>
        </div>
    )
}