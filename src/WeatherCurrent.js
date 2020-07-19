import React, { useState } from "react";
import axios from "axios";

import SearchEngine from "./SearchEngine";
import "./WeatherCurrent.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function WeatherCurrent() {
  const [weatherData, setWeatherdata] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
      ready: true,
      name: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      country: response.data.sys.country,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1 className="current">Current</h1>
        <hr />
        <h1 className="location">
          {weatherData.name}, {weatherData.country}
        </h1>
        <h5 className="date">Tues. 3rd July, 3pm</h5>
        <div className="clear-fix weatherMain">
          <img
            src="https://www.iconsdb.com/icons/preview/white/rain-xxl.png"
            alt="rain"
          ></img>

          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="units">°C</span>

          <span className="temperature fahrenheit">55</span>
          <span className="units">°F</span>
        </div>
        <h3 className="description text-capitalize">
          {weatherData.description}
        </h3>
        <ul>
          <li>Feels Like: {Math.round(weatherData.feelsLike)}°C</li>
          <li>Wind: {weatherData.wind}km/h</li>
          <li>Humidity: {weatherData.humidity}%</li>
        </ul>
        <SearchEngine />
      </div>
    );
  } else {
    const apiKey = "8c8f09ab6406d1fc43401acc75ad7253";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <Loader
        type="Circles"
        color="#F5A623"
        height={150}
        width={150}
        timeout={4000} //3 secs
      />
    );
  }
}
