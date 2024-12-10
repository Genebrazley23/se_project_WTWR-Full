import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";
import "./RegisterModal.css";

const RegisterModal = ({ isOpen, onRegister, onCloseModal, onSignClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onRegister(name, avatarUrl, email, password);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleAvatarUrlChange = (e) => setAvatarUrl(e.target.value);
  const signIn = (
    <input
      type="button"
      value="or Sign In"
      className="signin__btn"
      onClick={onSignClick}
    ></input>
  );

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      handleSubmit={handleSubmit}
      handleCloseModal={onCloseModal}
      otherButton={signIn}
    >
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
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="modal__input"
          placeholder="Password"
          required
        />
      </label>
      <label className="modal__label">
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="modal__input"
          placeholder="Confirm Password"
          required
        />
      </label>
      <label className="modal__label">
        Name
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="modal__input"
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="Avatar URL"
          name="confirmPassword"
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

export default RegisterModal;
