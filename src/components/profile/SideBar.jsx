import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SideBar.css";
function SideBar({ setActiveModal, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  if (!currentUser) {
    return <div className="side__bar">Loading...</div>;
  }
  function handleLogoutClick() {
    handleLogout();
    navigate("/");
  }
  return (
    <div className="side__bar">
      {currentUser.avatar ? (
        <div>
          <img
            src={currentUser.avatar}
            alt={currentUser.name || "User Avatar"}
            className="sidebar__avatar"
          />
        </div>
      ) : (
        <div className="circle">
          {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "?"}
        </div>
      )}
      <div className="sidebar__username">
        <p>{currentUser.name || "Anonymous"}</p>
      </div>
      <div className="sidebar__buttons">
        <button
          className="sidebar__button-change"
          onClick={() => setActiveModal("editProfile")}
        >
          Change Profile Data
        </button>
        <button className="sidebar__button-logout" onClick={handleLogoutClick}>
          Log Out
        </button>
      </div>
    </div>
  );
}
export default SideBar;
