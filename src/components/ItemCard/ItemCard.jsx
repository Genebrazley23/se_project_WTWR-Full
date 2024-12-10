import "./ItemCard.css";
import heartIcon from "../../assets/heart.svg";
import heartIconFill from "../../assets/heartfill.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  console.log("onCardLike prop:", onCardLike);
  const currentUser = useContext(CurrentUserContext);
  const isLiked =
    Array.isArray(item.likes) &&
    item.likes.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `card__heart ${
    isLiked ? "card__heart_active" : ""
  }`;

  function handleClick() {
    onCardClick(item);
  }

  function handleLike() {
    if (onCardLike) {
      onCardLike({ _id: item._id, isLiked });
    } else {
      console.error("onCardLike is undefined");
    }
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
      {currentUser && (
        <div>
          <img
            className={itemLikeButtonClassName}
            src={isLiked ? heartIconFill : heartIcon}
            alt="Heart icon"
            onClick={handleLike}
          />
        </div>
      )}
    </li>
  );
}

export default ItemCard;
