import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import WeatherDetails from "./WeatherDetails"

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
        <WeatherDetails feelsLike={props.data.feelsLike} wind={props.data.wind} humidity={props.data.humidity} />
        
        </div>
    )
}