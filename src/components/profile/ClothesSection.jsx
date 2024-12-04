import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
function ClothesSection({
  clothingItems,
  handleAddClothesBtnClick,
  onCardClick,
}) {
  return (
    <div className="clothes__section">
      <div>
        <span className="clothessection__items">Your Items</span>
        <span
          className="clothessection__new-item"
          onClick={handleAddClothesBtnClick}
        >
          + Add New Item
        </span>
      </div>
      <ul className="clothessection__list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
        <img
          src="assets/heart.svg"
          alt="heart icon"
          className="clothessection__heart"
        />
      </ul>
    </div>
  );
}

export default ClothesSection;
