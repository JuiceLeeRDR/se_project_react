import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const AddItemModal = ({ isOpen, onAddItem, handleCloseClick }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]); // watch the opening state

  const handleSubmit = () => {
    onAddItem({ name, imageUrl, weather });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSetWeather = (e) => {
    setWeather(e.target.value);
  };

  return (
    <ModalWithForm
      // buttonText="Add garment"
      title="New Garment"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          id="user-name"
          className="modal__input"
          placeholder="Name"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          id="user-imageUrl"
          className="modal__input"
          placeholder="Image URL"
          required
          onChange={handleImageUrlChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__btn-cntnr">
        <legend className="modal__text">Select the weather type:</legend>
        <div className="modal__radio-input">
          <input
            type="radio"
            id="hot"
            name="weatherCondition"
            value="hot"
            checked={weather === "hot"}
            onChange={handleSetWeather}
          />
          <label htmlFor="hot">Hot</label>
        </div>{" "}
        <div className="modal__radio-input">
          <input
            type="radio"
            id="warm"
            name="weatherCondition"
            value="warm"
            checked={weather === "warm"}
            onChange={handleSetWeather}
          />
          <label htmlFor="warm">Warm</label>
        </div>{" "}
        <div className="modal__radio-input">
          <input
            type="radio"
            id="cold"
            name="weatherCondition"
            value="cold"
            checked={weather === "cold"}
            onChange={handleSetWeather}
          />
          <label htmlFor="cold">Cold</label>
        </div>
      </fieldset>
      <button type="submit" className="modal__save-button">
        Add Garment
      </button>
    </ModalWithForm>
  );
};

export default AddItemModal;
