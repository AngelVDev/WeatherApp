import React from "react";

export default function Card(props) {
  const { max, min, name, img, onClose } = props;
  return (
    <div>
      <button onClick={onClose}>x</button>
      <h4>{name}</h4>
      <div>
        {" "}
        Max.
        <div>{max}°</div>
      </div>
      <div>
        {" "}
        Min.
        <div>{min}°</div>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="Ícono del clima"
        />
      </div>
    </div>
  );
}
