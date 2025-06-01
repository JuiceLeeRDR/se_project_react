import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ isOpen, onAddItem, handleCloseClick }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSetWeatherType = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({ name, imageUrl, weatherType });
    setName("");
    setImageUrl("");
    setWeatherType("");
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New Garment"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          id="name"
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
          id="imageUrl"
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
            checked={weatherType === "hot"}
            onChange={handleSetWeatherType}
          />
          <label htmlFor="hot">Hot</label>
        </div>{" "}
        <div className="modal__radio-input">
          <input
            type="radio"
            id="warm"
            name="weatherCondition"
            value="warm"
            checked={weatherType === "warm"}
            onChange={handleSetWeatherType}
          />
          <label htmlFor="warm">Warm</label>
        </div>{" "}
        <div className="modal__radio-input">
          <input
            type="radio"
            id="cold"
            name="weatherCondition"
            value="cold"
            checked={weatherType === "cold"}
            onChange={handleSetWeatherType}
          />
          <label htmlFor="cold">Cold</label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
