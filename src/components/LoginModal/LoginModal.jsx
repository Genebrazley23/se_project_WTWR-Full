import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";

const LoginModal = ({ isOpen, onLogin, onCloseModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <ModalWithForm
      title="Login"
      buttonText="Log In"
      handleSubmit={handleSubmit}
      handleCloseModal={onCloseModal}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="modal__input"
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
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
