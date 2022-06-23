import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import City from "./components/City";

const API_KEY = process.env.REACT_APP_APIKEY;

export default function App() {
  const [cities, setCities] = useState([]);
  //Functions

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //CALLING THE POLI--API
    const cityF = ciudad.toLowerCase();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityF}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.main !== undefined) {
          const ciudad = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitude: data.coord.lat,
            longitude: data.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("City not found");
        }
      });
  }

  const onDetail = (cityId) => {
    const ciudad = cities.filter((c) => c.id === parseInt(cityId));

    if (ciudad?.length === 1) {
      return ciudad[0];
    } else {
      return null;
    }
  };
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route path="/about" component={About} />
      <Route
        exact
        path="/city/:cityId"
        render={({ match }) => <City city={onDetail(match.params.cityId)} />}
      />
    </div>
  );
}
