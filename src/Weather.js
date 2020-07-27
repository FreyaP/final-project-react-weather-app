import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo"

import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function WeatherCurrent(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, updateCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
    });
    
  }
function handleChange(event) {
  updateCity(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  searchCity();
}

function searchCity(){
  const apiKey = "8c8f09ab6406d1fc43401acc75ad7253";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Change location"
            className="form-control"
            autoFocus="on"
            onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary w-100"
          />
        </div>
      </div>
    </form>
        <div className="row">
          <div className="col-6">
      <WeatherInfo data={weatherData}/>
      </div>
      
          <div className="col-6">
        <WeatherForecast data={weatherData}/>
      </div>
      </div>
        </div>
    );
  } else {
searchCity();
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
