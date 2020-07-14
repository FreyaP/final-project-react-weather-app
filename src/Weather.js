import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Change location..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h3>Rain</h3>
          <h5>Vancouver</h5>
          <p>Thursday, 7:30pm</p>
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="rain"
              className="float-left"
            ></img>

            <span className="temperature">13</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col=6">
          <ul>
            <li>
              <span className="weatherDetail">Humidity</span>
              <br />
              <span className="weatherStat">50%</span>
            </li>
            <li>
              <span className="weatherDetail">Chance of Rain</span>
              <br />
              <span className="weatherStat">10%</span>
            </li>
            <li>
              <span className="weatherDetail">Wind Speed</span>
              <br />
              <span className="weatherStat">3km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
