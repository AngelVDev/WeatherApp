import React from "react";
import Card from "./Card";
export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  console.log(cities);
  return (
    <div className="cityContainer">
      {cities.map((city) => {
        return (
          <a href={`/city/${city.id}`}>
            <Card
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => city.id}
            />
          </a>
        );
      })}
    </div>
  );
}
