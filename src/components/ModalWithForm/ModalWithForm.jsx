import "./ModalWithForm.css";
import { useState } from "react";

function ModalWithForm({
  handleSubmit,
  handleCloseModal,
  title,
  buttonText,
  otherButton,
  customClass,
  children,
}) {
  const [formData, setFormData] = useState({});

  function handleClose(e) {
    e.preventDefault();
    handleCloseModal();
  }

  return (
    <div className={"modal " + (customClass || "")}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleClose}
          type="button"
          className="modal__close"
        ></button>
        <form onSubmit={handleSubmit} className="modal__form">
          {children}
          <div className="modal__submit-container">
            <input type="submit" className="modal__submit" value={buttonText} />
            {otherButton}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
