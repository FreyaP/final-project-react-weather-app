import React, { useState } from "react";
import "./WeatherDetails.css";

//shows feels like, wind speed and humidity in imperial and metric

export default function FeelsLike(props) {
    const [unit, updateUnit] = useState("metric");

function showImperial(event) {
    event.preventDefault();
    updateUnit("imperial");
}
function showMetric(event) {
    event.preventDefault();
    updateUnit("metric");
}

    if (unit === "metric") {
return (
    <div className="WeatherDetails">
        <ul>
            <li><a href="/" onClick={showImperial}>Click For Imperial</a></li>
          <li>
            <span className="weatherInfo">Feels Like:</span>{" "}
            <strong>{Math.round(props.feelsLike)}°C</strong>
          </li>
          <li>
            <span className="weatherInfo">Wind:</span>{" "}
            <strong>{props.wind}km/h</strong>
          </li>
          <li>
            <span className="weatherInfo">Humidity:</span>
            <strong> {props.humidity}%</strong>
          </li>
        </ul>
        
    </div>
)} else {
    return (
        <div className="WeatherDetails">
            <ul>
                <li><a href="/" onClick={showMetric}>Click For Metric</a></li>
              <li>
                <span className="weatherInfo">Feels Like:</span>{" "}
                <strong>{Math.round((props.feelsLike * 9) / 5 + 32)}°F</strong>
              </li>
              <li>
                <span className="weatherInfo">Wind:</span>{" "}
                <strong>{Math.round(props.wind / 1.609)}mph</strong>
              </li>
              <li>
                <span className="weatherInfo">Humidity:</span>
                <strong> {props.humidity}%</strong>
              </li>
            </ul>
            
        </div>
    ) 
}
}