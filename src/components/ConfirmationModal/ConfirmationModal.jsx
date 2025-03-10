function ConfirmationModal({ isOpen, handleClose, handleClick }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleClose}
          type="button"
          className="modal__close"
        ></button>
        <div className="modal__footer">
          <p className="modal__weather">
            <span>Are you sure you want to delete this item?</span>
          </p>
          <button onClick={handleClick} type="button" className="modal__delete">
            Yes
          </button>
          <button onClick={handleClose} type="button" className="modal__delete">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConfirmationModal;
