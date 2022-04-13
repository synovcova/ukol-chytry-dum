import React from "react";
import { useState } from "react";
import "./style.css";
import lightOn from "./images/light-on.svg";
import lightOff from "./images/light-off.svg";

const Light = ({ name, state }) => {
  const [light, setLight] = useState(state);

  const handleClick = () => {
    if (light === "on") {
      setLight("off");
    } else {
      setLight("on");
    }
  };

  return (
    <div onClick={handleClick} className="light">
      <div className="light__icon">
        <img src={light === "on" ? lightOn : lightOff} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;