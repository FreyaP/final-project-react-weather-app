import React from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";

export default function WeatherHourly(props) {

    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`
    }
    function temp() {
        let temp = Math.round(props.data.temp);
        return `${temp}°C`
    }
    return (
        <div className="WeatherForecast hourly col">
           {hours()}
           <WeatherForecastIcon icon={props.data.weather[0].icon} /> 
           {temp()}
        </div>
    )
    
}