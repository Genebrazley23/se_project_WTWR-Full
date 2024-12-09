import React from "react";
import "./Itemmodal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemModal({ isOpen, handleClose, item, handleDeleteButton }) {
  if (!isOpen) return null;

  const currentUser = useContext(CurrentUserContext);

  const isOwn = item.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  function handleDeleteClick(e) {
    handleDeleteButton(item);
  }

  return (
    <div className="modal">
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleClose}
          type="button"
          className="modal__close"
        ></button>
        <img className="card__image" src={item.imageUrl} alt={item.name} />
        <div className="modal__footer">
          <div
            className="modal__text
          "
          >
            <h2 className="modal__caption">{item.name}</h2>
            <p className="modal__weather">
              <span>Weather: {item.weather}</span>
            </p>
          </div>
          <button
            onClick={handleDeleteClick}
            type="button"
            className={itemDeleteButtonClassName}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
