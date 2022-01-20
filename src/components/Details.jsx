import React from "react";
import styles from './Details.module.css'

export default function Details({city}) {
    if (city) {
        return (
            <div className={styles.ciudad}>
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperature: {city.temp} ºC</div>
                            <div>Weather: {city.weather}</div>
                            <div>Wind: {city.wind} km/h</div>
                            <div>Clouds: {city.clouds}</div>
                            <div>Latitude: {city.latitud}º</div>
                            <div>Longitude: {city.longitud}º</div>
                        </div>
                </div>
            </div>
       )
    }else {
        return (
            <div className={styles.er}>
            <h2>Try again</h2>
            </div>
        )
    }
}