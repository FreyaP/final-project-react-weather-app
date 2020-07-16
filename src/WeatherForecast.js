import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <h1 className="forecast">Forecast</h1>
      <hr />
      <h2 className="interval">Hourly</h2>
      <div className="row">
        <div className="col-2">4pm</div>
        <div className="col-2">5pm</div>
        <div className="col-2">6pm</div>
        <div className="col-2">7pm</div>
        <div className="col-2">8pm</div>
        <div className="col-2">9pm</div>
      </div>
      <h2 className="interval daily">Daily</h2>
      <div className="row">
        <div className="col-2">Wed</div>
        <div className="col-2">Thur</div>
        <div className="col-2">Fri</div>
        <div className="col-2">Sat</div>
        <div className="col-2">Sun</div>
        <div className="col-2">Mon</div>
      </div>
    </div>
  );
}
