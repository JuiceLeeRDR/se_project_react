import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  isOpen,
  handleCloseClick,
  handleRegistration,
  handleLogIn,
}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <ModalWithForm
      // buttonText="Sign Up"
      title="Sign Up"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          id="register-email"
          className="modal__input"
          placeholder="Email"
          required
          onChange={handleChange}
          value={data.email}
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          id="register-name"
          className="modal__input"
          placeholder="Name"
          required
          onChange={handleChange}
          value={data.name}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          id="register-password"
          className="modal__input"
          placeholder="Password"
          required
          onChange={handleChange}
          value={data.password}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatar"
          id="register-avatar"
          className="modal__input"
          placeholder="Avatar URL"
          required
          onChange={handleChange}
          value={data.avatar}
        />
      </label>
      <button type="submit" className="modal__save-button">
        Sign Up
      </button>
      <button type="button" className="modal__signup-btn" onClick={handleLogIn}>
        or Log in
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
