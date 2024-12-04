import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import "./EditProfileModal.css";

const EditProfileModal = ({ isOpen, userData, onSave, onCloseModal }) => {
  const [name, setName] = useState(userData.name || "");
  const [email, setEmail] = useState(userData.email || "");
  const [avatarUrl, setAvatarUrl] = useState(userData.avatar || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      email,
      avatar: avatarUrl,
    };
    onSave(updatedData);
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
