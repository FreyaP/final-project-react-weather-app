import React, { useState } from "react";
import axios from "axios";
import WeatherHourly from "./WeatherHourly";
import WeatherDaily from "./WeatherDaily";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [lat, setLat] = useState(null);
  
  function handleResponse(response) {
    setDaily(response.data.daily);
    setHourly(response.data.hourly);
    setLat(response.data.lat);
    setLoaded(true);
}

  if (loaded && props.data.lat === lat)  {
  return (
    <div className="WeatherForecast">
      <h1 className="forecast">Forecast</h1>
      <hr />
      <h2 className="interval">Hourly</h2>
      <div className="row">
      <WeatherHourly data={hourly[1]} />
      <WeatherHourly data={hourly[2]} />
      <WeatherHourly data={hourly[3]} />
      <WeatherHourly data={hourly[4]} />
      <WeatherHourly data={hourly[5]} />
      </div>
      <h2 className="interval daily">Daily</h2>
      <div className="row">
      <WeatherDaily data={daily[1]} />
      <WeatherDaily data={daily[2]} />
      <WeatherDaily data={daily[3]} />
      <WeatherDaily data={daily[4]} />
      <WeatherDaily data={daily[5]} />
      </div>
    </div>
  );}
  else {
    const apiKey = "f756fdaa58085ec9592a144b41023548";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&
  exclude={current,minutely}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);
  return (null);
  }
}
