import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddBtnClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="Page Logo" className="header__logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddBtnClick}
        className="header__add-clothes-button"
        type="button"
      >
        <p className="header__btn-text">+ Add clothes</p>
      </button>
      <div className="header__user-cntnr">
        <p className="header__user">Name of user</p>
        <img src={avatar} alt="User avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
