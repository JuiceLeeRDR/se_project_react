import "./EditProfileModal.css";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const EditProfileModal = ({
  isOpen,
  handleCloseClick,
  currentUser,
  handleProfileUpdate,
}) => {
  const [data, setData] = useState({
    name: "",
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
    handleProfileUpdate(data);
  };

  useEffect(() => {
    if (isOpen && currentUser) {
      setData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

  return (
    <ModalWithForm
      buttonText="Edit Profile"
      title="Edit Profile"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          id="name"
          className="modal__input"
          placeholder="Name"
          required
          onChange={handleChange}
          value={data.name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatar"
          id="avatar"
          className="modal__input"
          placeholder="Avatar URL"
          required
          onChange={handleChange}
          value={data.avatar}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
