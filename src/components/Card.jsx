import React from "react";

export default function Card(props) {
  const { id, max, min, name, img, onClose } = props;
  return (
    <div className="cardCity">
      <button onClick={onClose}>x</button>
      <a href={`/city/${id}`} style={{ textDecoration: "none" }}>
        <h4>{name}</h4>
      </a>
      <div>Max. {max}°</div>
      <div>Min. {min}°</div>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="weatherIcon"
      />
    </div>
  );
}
