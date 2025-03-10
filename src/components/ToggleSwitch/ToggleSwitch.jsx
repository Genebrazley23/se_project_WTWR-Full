import { React, useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
const ToggleSwitch = ({ handleToggleSwitchChange }) => {
  const currentTemperatureUnitContext = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__checkbox"
        checked={currentTemperatureUnitContext.currentTemperatureUnit === "F"}
        onChange={handleToggleSwitchChange}
      />
      <span
        className={`switch__slider ${
          currentTemperatureUnitContext.currentTemperatureUnit === "F"
            ? "switch__slider--active"
            : ""
        }`}
      ></span>
      <p className="switch__label switch__label--F">F</p>
      <p className="switch__label switch__label--C">C</p>
    </label>
  );
};
export default ToggleSwitch;
