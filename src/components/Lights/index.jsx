import React from "react";
import "./style.css";
import Light from "../Light";

const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map((light) => (
        <Light key={light.name} name={light.name} state={light.state} />
      ))}
    </div>
  );
};

export default Lights;