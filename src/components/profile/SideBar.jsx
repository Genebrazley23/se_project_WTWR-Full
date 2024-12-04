import { useContext } from "react";
import avatar from "../../assets/avatar.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="side__bar">
      {currentUser && currentUser.avatar ? (
        <div>
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="sidebar__avatar"
          />
        </div>
      ) : (
        <div className="circle"> {currentUser.name.substring(0, 1)}</div>
      )}
      {currentUser && (
        <div className="sidebar__username">
          <p>{currentUser.name}</p>
        </div>
      )}{" "}
      <div className="sidebar__button">
        <button className="sidebar__button-change">Change profile data</button>
        <button className="sidebar__button-logout">Log Out</button>
      </div>
    </div>
  );
}

export default SideBar;
