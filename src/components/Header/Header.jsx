import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
// import React from "react";

function Header({ handleAddBtnClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Page Logo" className="header__logo" />
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch
      // checked={checked}
      // handleChange={() => setChecked(!checked)}
      // handleToggleSwitchChange={handleToggleSwitchChange}
      />
      <button
        onClick={handleAddBtnClick}
        className="header__add-clothes-button"
        type="button"
      >
        <p className="header__btn-text">+ Add clothes</p>
      </button>
      <Link to="/profile" className="header__user-cntnr">
        <div className="header__user-cntnr">
          <p className="header__user">Name of user</p>
          <img src={avatar} alt="User avatar" className="header__avatar" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
