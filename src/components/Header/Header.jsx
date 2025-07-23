import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Header({
  handleAddBtnClick,
  weatherData,
  isLoggedIn,
  registerClick,
  logInClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

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

      {isLoggedIn ? (
        <>
          {" "}
          <button
            onClick={handleAddBtnClick}
            className="header__add-clothes-button"
            type="button"
          >
            <p className="header__btn-text">+ Add clothes</p>
          </button>
          <Link to="/profile" className="header__user-cntnr">
            <p className="header__user">{currentUser?.name || "User"}</p>
            {currentUser?.avatar ? (
              <>
                <img
                  src={currentUser.avatar}
                  alt="User avatar"
                  className="header__avatar"
                />
              </>
            ) : (
              <div className="header__avatar-placeholder">
                {currentUser?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
          </Link>
        </>
      ) : (
        <div className="header__auth-buttons">
          <button
            className="header__login-btn header"
            onClick={logInClick}
            type="button"
          >
            Log In
          </button>
          <button
            className="header__signup-btn header"
            onClick={registerClick}
            type="button"
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
