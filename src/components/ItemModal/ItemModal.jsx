import React, { useContext } from "react";
import "./Itemmodal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, handleClose, item, handleDeleteButton }) {
  if (!isOpen) return null;

  const currentUser = useContext(CurrentUserContext);

  if (!item) {
    console.warn("Item is null or undefined");
    return (
      <div className="modal">
        <div className="modal__content">
          <p>Loading item details...</p>
          <button onClick={handleClose} type="button" className="modal__close">
            Close
          </button>
        </div>
      </div>
    );
  }

  const isOwn = item.owner === currentUser?._id;

  const itemDeleteButtonClassName = `modal__delete ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  function handleDeleteClick() {
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
          <div className="modal__text">
            <h2 className="modal__caption">{item.name}</h2>
            <p className="modal__weather">
              <span>Weather: {item.weather}</span>
            </p>
          </div>
          {isOwn && (
            <button
              onClick={handleDeleteClick}
              type="button"
              className={itemDeleteButtonClassName}
            >
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
