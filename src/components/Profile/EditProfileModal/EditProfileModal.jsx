import "./EditProfileModal.css";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  handleCloseClick,
  // currentUser,
  handleProfileUpdate,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      setData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("it should be updated!");
    // e.preventDefault();
    handleProfileUpdate({
      name: data.name,
      avatar: data.avatar,
    });
  };

  return (
    <ModalWithForm
      // buttonText="Edit Profile"
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
          id="edit-name"
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
          id="edit-avatar"
          className="modal__input"
          placeholder="Avatar URL"
          required
          onChange={handleChange}
          value={data.avatar}
        />
      </label>
      <button type="submit" className="modal__save-button">
        Save
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
