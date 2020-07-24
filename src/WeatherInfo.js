import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

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
          <div className="float-right">
            <WeatherIcon icon={props.data.icon} alt={props.data.description} />
            </div>
          <WeatherTemp celsius={props.data.temperature} />
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