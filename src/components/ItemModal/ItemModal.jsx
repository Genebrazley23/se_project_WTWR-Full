import React from "react";
import "./Itemmodal.css";

function ItemModal({ isOpen, handleClose, item, handleDeleteButton }) {
  if (!isOpen) return null;

  function handleClick(e) {
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
          <button onClick={handleClick} type="button" className="modal__delete">
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
