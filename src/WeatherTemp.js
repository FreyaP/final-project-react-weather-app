
 import React, { useState } from "react";

export default function WeatherTemp(props) {
const [unit, updateUnit] = useState("celsius");

function convertFahrenheit() {
    return (props.celsius*9) / 5 + 32;
}

function showFahrenheit(event) {
    event.preventDefault();
    updateUnit("fahrenheit");
}

function showCelsius(event) {
    event.preventDefault();
    updateUnit("celsius");
}

if (unit === "celsius") {
    return(
        <div>
        <span className="temperature">
            {Math.round(props.celsius)}
          </span>
          <span className="units">°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
          </div>
    )
} else {
    return(
        <div>
        <span className="temperature">
            {Math.round(convertFahrenheit())}
          </span>
          <span className="units">°F | °<a href="/" onClick={showCelsius}>C</a></span>
          </div>
    )
}
}