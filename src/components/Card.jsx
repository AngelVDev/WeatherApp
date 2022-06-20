import React from "react";

export default function Card(props) {
  const { max, min, name, img, onClose } = props;
  return (
    <div className="cardCity">
      <button onClick={onClose}>x</button>
      <h4>{name}</h4>
      <div>Max. {max}°</div>
      <div>Min. {min}°</div>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="weatherIcon"
      />
    </div>
  );
}
