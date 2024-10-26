import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ handleToggleSwitchChange }) => {
  const [currentTemperatureUnit, setTemperatureUnit] = React.useState("F");

  const handleChange = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__checkbox"
        checked={currentTemperatureUnit === "F"}
        onChange={handleToggleSwitchChange}
      />
      <span
        className={`switch__slider ${
          currentTemperatureUnit === "F" ? "switch__slider--active" : ""
        }`}
      ></span>
      <p className="switch__label switch__label--F">F</p>
      <p className="switch__label switch__label--C">C</p>
    </label>
  );
};

export default ToggleSwitch;
