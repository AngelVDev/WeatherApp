import React from "react";
import "./styles/City.css";
export default function City({ ciudad }) {
  console.log(ciudad);
  if (!ciudad) {
    return (
      <div className="er">
        <h2>Try again</h2>
        {alert("Click the hat to go back")}
      </div>
    );
  } else {
    return (
      <div className="cityDetails">
        <div className="container">
          <h2>{ciudad.name}</h2>
          <div className="info">
            <div>Temperature: {ciudad.temp} ºC</div>
            <div>Weather: {ciudad.weather}</div>
            <div>Wind: {ciudad.wind} km/h</div>
            <div>Clouds: {ciudad.clouds}</div>
            <div>Latitude: {ciudad.latitude}</div>
            <div>Longitude: {ciudad.longitude}</div>
          </div>
        </div>
      </div>
    );
  }
}
