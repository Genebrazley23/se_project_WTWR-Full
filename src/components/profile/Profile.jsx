import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";
import "./Profile.css";

function Profile({ clothingItems, handleAddClothesBtnClick, onCardClick }) {
  return (
    <div className="profile__content">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        handleAddClothesBtnClick={handleAddClothesBtnClick}
        onCardClick={onCardClick}
      />
    </div>
  );
}

export default Profile;
