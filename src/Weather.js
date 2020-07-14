import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="rain"
          ></img>

          <h3>Rain</h3>
          <h5>Vancouver</h5>
          <h1>13°C</h1>
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Change location"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col=6">
          <ul>
            <li>
              Humidity
              <br />
              50%
            </li>
            <li>
              Chance of Rain
              <br />
              10%
            </li>
            <li>
              Wind Speed
              <br />
              3km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
