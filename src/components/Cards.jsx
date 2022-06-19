import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  console.log(cities);
  return (
    <div>
      {cities.map((city) => {
        return (
          <Cartita>
            <Card
              max={city.main.temp_max}
              min={city.main.temp_min}
              name={city.name}
              img={city.weather[0].icon}
              onClose={() => alert(city.name)}
            />
          </Cartita>
        );
      })}
    </div>
  );
}
const Cartita = styled.div`
  color: #ffe8d6;
  display: inline-block;
  justify-content: center;
  margin: 3vh;
  border-radius: 10px;
  &:hover {
    animation: glow 800ms ease-in 50ms 1 normal forwards;
  }
  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }

    100% {
      box-shadow: 0 0 20px 0px rgba(255, 232, 214, 0.35);
    }
  }
`;
export { Cartita };
