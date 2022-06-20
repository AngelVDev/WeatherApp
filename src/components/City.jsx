import React from "react";
import "./styles/City.css";
export default function City(props) {
  const { name, temp, weather, wind, clouds, latitude, longitude } = props;
  console.log(props);

  if (props !== null) {
    return (
      <div className="cityDetails">
        <div className="container">
          <h2>{name}</h2>
          <div className="info">
            <div>Temperature: {temp} ºC</div>
            <div>Weather: {weather}</div>
            <div>Wind: {wind} km/h</div>
            <div>Clouds: {clouds}</div>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="er">
        <h2>Try again</h2>
        {alert("Click the hat to go back")}
      </div>
    );
  }
}
