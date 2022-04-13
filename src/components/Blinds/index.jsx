import React from "react";
import { useState } from "react";
import "./style.css";
import imgBlindsOpen from "./images/blinds-open.svg";
import imgBlindsClosed from "./images/blinds-closed.svg";

const Blinds = ({ state }) => {
  const [stateBlinds, setStateBlings] = useState(state);

  const handleClick = (event) => {
    if (event.target.innerText === "Otevřeno") {
      setStateBlings("open");
    }
    if (event.target.innerText === "Zavřeno") {
      setStateBlings("close");
    }
  };

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={stateBlinds === "open" ? imgBlindsOpen : imgBlindsClosed} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={
            stateBlinds === "open" ? "button button--active" : "button"
          }
          onClick={handleClick}
        >
          Otevřeno
        </button>
        <button
          className={
            stateBlinds === "open" ? "button" : "button button--active"
          }
          onClick={handleClick}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;