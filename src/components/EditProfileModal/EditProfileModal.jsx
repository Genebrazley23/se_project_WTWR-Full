import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import "./EditProfileModal.css";
const EditProfileModal = ({ isOpen, onSave, onCloseModal }) => {
  // Access currentUser data from context
  const currentUser = useContext(CurrentUserContext);
  // If no currentUser is available, do not render the modal
  if (!currentUser) return null;
  // Initialize state from currentUser
  const [name, setName] = useState(currentUser.name || "");
  const [email, setEmail] = useState(currentUser.email || "");
  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatar || "");
  // Sync the state with any updates to currentUser from context
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setAvatarUrl(currentUser.avatar);
    }
  }, [currentUser]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      email,
      avatar: avatarUrl,
    };
    onSave(updatedData); // Call the onSave function passed as prop
  };
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAvatarUrlChange = (e) => setAvatarUrl(e.target.value);
  return (
    <ModalWithForm
      title="Edit Profile"
      customClass="edit-profile-modal"
      buttonText="Save Change"
      handleSubmit={handleSubmit}
      handleCloseModal={onCloseModal}
      isOpen={isOpen}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="modal__input"
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="modal__input"
          placeholder="Email"
          required
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          name="avatarUrl"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
          className="modal__input"
          placeholder="Avatar URL"
          required
        />
      </label>
    </ModalWithForm>
  );
};
export default EditProfileModal;
