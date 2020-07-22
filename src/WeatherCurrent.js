import React, { useState } from "react";
import axios from "axios";


import SearchEngine from "./SearchEngine";
import WeatherInfo from "./WeatherInfo"

import "./WeatherCurrent.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function WeatherCurrent() {
  const [weatherData, setWeatherdata] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherdata({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
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
      <div>
      <WeatherInfo data={weatherData}/>
      
        
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
        timeout={4000} 
      />
    );
  }
}
