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
  setIsEditProfileModalOpen,
  handleLogout,
}) {
  const currentLoggedInUser = useContext(CurrentUserContext);

  if (!currentLoggedInUser) {
    document.location.href = "/";
  }

  return (
    <div className="profile__content">
      <SideBar
        setIsEditProfileModalOpen={setIsEditProfileModalOpen}
        handleLogout={handleLogout}
      />
      <ClothesSection
        clothingItems={clothingItems}
        handleAddClothesBtnClick={handleAddClothesBtnClick}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
