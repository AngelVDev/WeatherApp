import React from "react";
import Card from "./Card";
export default function Cards({ cities, onClose }) {
  return (
    <div className="cityContainer">
      {cities.map((city) => {
        return (
          <Card
            id={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
          />
        );
      })}
    </div>
  );
}
