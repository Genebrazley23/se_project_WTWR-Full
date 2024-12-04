import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClothesBtnClick,
  weatherData,
  handleToggleSwitchChange,
  handleSignInBtnClick,
  handleSignUpBtnClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);
  console.log("rmedx", currentUser);
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Headerlogo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__spacer"></div>
      <ToggleSwitch handleToggleSwitchChange={handleToggleSwitchChange} />
      {currentUser && (
        <button
          onClick={handleAddClothesBtnClick}
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      )}

      {currentUser && <div className="header__spacer"></div>}
      {currentUser && (
        <Link to="/profile">
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="avatar"
              />
            ) : (
              <div className="circle"> {currentUser.name.substring(0, 1)}</div>
            )}
          </div>
        </Link>
      )}
      {!currentUser && (
        <button onClick={handleSignUpBtnClick} className="header__signup">
          Sign up
        </button>
      )}

      {!currentUser && (
        <button onClick={handleSignInBtnClick} className="header__signin">
          Sign in
        </button>
      )}
    </header>
  );
}
export default Header;
