import { useNavigate } from "react-router-dom";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";
import "./Profile.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Profile({
  clothingItems,
  handleAddClothesBtnClick,
  onCardClick,
  onCardLike,
  setActiveModal,
  handleLogout,
}) {
  const currentLoggedInUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  if (!currentLoggedInUser) {
    navigate("/");
    return null;
  }
  return (
    <div className="profile__content">
      <SideBar setActiveModal={setActiveModal} handleLogout={handleLogout} />
      <ClothesSection
        clothingItems={clothingItems}
        handleAddClothesBtnClick={handleAddClothesBtnClick}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        setActiveModal={setActiveModal}
      />
    </div>
  );
}
export default Profile;
