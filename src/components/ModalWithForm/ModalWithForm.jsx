import "./ModalWithForm.css";
import { useState } from "react";

function ModalWithForm({
  handleSubmit,
  handleCloseModal,
  title,
  buttonText,
  children,
}) {
  const [formData, setFormData] = useState({});

  function handleClose(e) {
    e.preventDefault();
    handleCloseModal();
  }

  function handleAddChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleClose}
          type="button"
          className="modal__close"
        ></button>
        <form onSubmit={handleSubmit} className="modal__form">
          {children}
          <input type="submit" className="modal__submit" value={buttonText} />
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
