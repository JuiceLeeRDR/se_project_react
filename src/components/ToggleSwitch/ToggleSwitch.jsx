import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../../src/contexts/CurrentTemperatureUnitContext.js";

const ToggleSwitch = () => {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle">
      <input
        type="checkbox"
        className="toggle__checkbox"
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle__circle"></span>
      <span className="toggle__text toggle__text_f">F</span>
      <span className="toggle__text toggle__text_c">C</span>
    </label>
  );
};

export default ToggleSwitch;
