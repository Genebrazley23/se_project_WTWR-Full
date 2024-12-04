import "./ItemCard.css";
import heartIcon from "../../assets/heart.svg";

function ItemCard({ item, onCardClick }) {
  function handleClick() {
    onCardClick(item);
  }

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      <div>
        <img className="card__heart" src={heartIcon} alt="Heart icon" />
      </div>
    </li>
  );
}

export default ItemCard;
