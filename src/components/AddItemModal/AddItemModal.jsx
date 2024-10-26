import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  // useEffect(() => {
  //   if (isOpen) {
  //     setName("");
  //     setImageUrl("");
  //     setWeather("");
  //   }
  // }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  return (
    <ModalWithForm
      title="Add New Item"
      buttonText="Add Item"
      handleSubmit={handleSubmit}
      handleCloseModal={onCloseModal}
    >
      <label className="modal__label">
        Item Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="modal__input"
          required
        />
      </label>
      <label className="modal__label">
        Image URL
        <input
          type="url"
          name="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
          className="modal__input"
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__input_type_radio">
          <input
            name="weather"
            id="hot"
            type="radio"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="hot"
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__input_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            name="weather"
            value="warm"
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__input_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            name="weather"
            value="cold"
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
