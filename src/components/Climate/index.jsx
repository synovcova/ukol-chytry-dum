import React from "react";
import { useState } from "react";
import "./style.css";
import temp from "./images/temp.svg";

const Climate = ({ temperature, humidity }) => {
  const [newTemperature, setTemperature] = useState(temperature);

  const handleClick = (event) => {
    if (event.target.innerText === "+" && newTemperature < 30) {
      setTemperature(newTemperature + 1);
    }
    if (event.target.innerText === "-" && newTemperature > 0) {
      setTemperature(newTemperature - 1);
    }
  };

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={temp} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature"> {newTemperature}&deg;C</div>
        <div className="climate__humidity">
          Vlhost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button onClick={handleClick} className="button">
          +
        </button>
        <button onClick={handleClick} className="button">
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;