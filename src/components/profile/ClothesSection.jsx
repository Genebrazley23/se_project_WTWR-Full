import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
function ClothesSection({
  clothingItems,
  handleAddClothesBtnClick,
  onCardClick,
  onCardLike,
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
        {clothingItems
          .filter((item) => item.owner)
          .map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
            />
          ))}
      </ul>
    </div>
  );
}
export default ClothesSection;
