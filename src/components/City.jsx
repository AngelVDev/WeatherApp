import React from "react";
import "./styles/City.css";
export default function City({ city }) {
  if (!city) {
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
          <h2>{city.name}</h2>
          <div className="info">
            <div>Temperature: {city.temp} ºC</div>
            <div>Weather: {city.weather}</div>
            <div>Wind: {city.wind} km/h</div>
            <div>Clouds: {city.clouds}</div>
            <div>Latitude: {city.latitude}</div>
            <div>Longitude: {city.longitude}</div>
          </div>
        </div>
      </div>
    );
  }
}
