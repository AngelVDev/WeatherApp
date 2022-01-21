import React from 'react';
import styled from "styled-components"
import {Cartita} from "./Cards"

export default function Card(props) {
  const{
    max,
    min,
    name,
    img,
    onClose 
  } = props
  return ( <Cartita>
  <div> 
    <button onClick={onClose}>
    <Equi>x</Equi>
    </button>
    <h4>{name}</h4>
    <div> Max.
      <div>{max}°</div>
    </div>
    <div> Min.
      <div>{min}°</div>
    </div><div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Ícono del clima' />
    </div>
  </div>
  </Cartita>)
};
const Equi = styled.button`
outline: none;
border: none;
display: content;
background: #cb8282;
&:active{
  filter: hue-rotate(77deg);
}
&:focus{
  animation: jello 700ms ease 0s 1 normal forwards;
}
@keyframes jello {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
`
export {Equi}