import React from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";

export default function WeatherDaily(props) {

    function day(){
        let date = new Date(props.data.dt * 1000);
        
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let day = days[date.getDay()];
        return `${day}`
    }
    function  temp() {
        let tempMax = Math.round(props.data.temp.max);
        let tempMin = Math.round(props.data.temp.min);
        return `${tempMax} | ${tempMin}`
    }
    return (
        <div className="WeatherForecast days col">
        {day()}
        <WeatherForecastIcon icon={props.data.weather[0].icon} />
        {temp()}
        </div>
        
        )
}