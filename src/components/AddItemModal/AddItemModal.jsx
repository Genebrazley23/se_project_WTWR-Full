import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({ name, link: imageUrl, weather });
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  return (
    <ModalWithForm
      title="Add New Item"
      buttonText="Add Item"
      handleFormSubmit={handleSubmit}
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
      <label className="modal__label">
        Weather
        <input
          type="text"
          name="weather"
          value={weather}
          onChange={handleWeatherChange}
          className="modal__input"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default AddItemModal;
