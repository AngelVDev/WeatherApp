import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { id, max, min, name, img, onClose } = props;
  return (
    <div className="cardCity">
      <button onClick={onClose}>x</button>
      <Link to={`/city/${id}`} style={{ textDecoration: "none" }}>
        <h4>{name}</h4>
      </Link>
      <div>Max. {max}°</div>
      <div>Min. {min}°</div>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="weatherIcon"
      />
    </div>
  );
}
