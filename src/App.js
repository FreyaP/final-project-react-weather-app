import React from "react";
import WeatherCurrent from "./WeatherCurrent";

import WeatherForecast from "./WeatherForecast";

import "./App.css";

export default function App() {
  return (
    <div className="App row">
      
        <WeatherCurrent defaultCity="Vancouver"/>
      
      
      <footer>
        This app is open sourced on{" "}
        <a
          href="https://github.com/FreyaP/final-project-react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github{" "}
        </a>
        and coded by{" "}
        <a
          href="https://www.linkedin.com/in/freya-pearse-0b6b10192/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freya Pearse
        </a>
      </footer>
    </div>
  );
}
