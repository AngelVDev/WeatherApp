import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import City from "./components/City";
// import City from "./components/City.jsx";
const apiKey = "fecb4768ab7de692bbbe291b87984348";

export default function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((cities) => cities.filter((c) => c.id !== id));
  }
  function onSearch(city) {
    //Llamado a la API del clima
    const cityF = city.toLowerCase();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityF}&units=metric&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitude: recurso.coord.lat,
            longitude: recurso.coord.lon,
          };
          setCities((cities) => [...cities, ciudad]);
        } else {
          alert("City not found");
        }
      });
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={() => <Nav onSearch={onSearch} />} />
        <Route
          exact
          path="/"
          render={() => <Cards cities={cities} onClose={onClose} />}
        />
        <Route
          exact
          path="/city/:cityId"
          render={() => <City cities={cities} />}
        />
        <Route path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}
