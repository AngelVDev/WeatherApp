import React, { useState } from 'react';
import Cards from './components/Cards.jsx';
import styles from './App.module.css'; 
import Nav from './components/Nav.jsx'; 
import { Route } from 'react-router';
import About from './components/About.jsx'
import Details from "./components/Details.jsx"

const apiKey = 'fecb4768ab7de692bbbe291b87984348';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
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
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City not found, sorry");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className= {styles.app}>
    <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
    <Route
        path='/about'
        component={About}
    />
  <div className={styles.city}>
    <Route
        exact path='/'
        render={() => 
        <Cards onClose={onClose} cities={cities} />}
    />     
  </div>
   <Route
        exact
        path='/ciudad/:ciudadId'
        render={({match}) => 
        <Details city={onFilter(match.params.ciudadId)}/>}
     />
</div>
);
}

export default App;
