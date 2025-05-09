import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { coordinates, APIkey } from "../../utils/constants";
import { getWeatherData, processTempRanges } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");

    setSelectedCard(card);
  };

  const handleAddBtnClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeatherData(coordinates, APIkey)
      .then((data) => {
        const processedTempRange = processTempRanges(data);
        setWeatherData(processedTempRange);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleAddBtnClick={handleAddBtnClick}
          weatherData={weatherData}
        />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          handleCloseClick={closeActiveModal}
        />
        <ModalWithForm
          buttonText="Add garment"
          title="New Garment"
          activeModal={activeModal}
          handleCloseClick={closeActiveModal}
        >
          <label htmlFor="name" className="modal__label">
            Name
            <input
              type="text"
              id="name"
              className="modal__input"
              placeholder="Name"
              required
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
              />
              <label htmlFor="hot">Hot</label>
            </div>{" "}
            <div className="modal__radio-input">
              <input
                type="radio"
                id="warm"
                name="weatherCondition"
                value="warm"
              />
              <label htmlFor="warm">Warm</label>
            </div>{" "}
            <div className="modal__radio-input">
              <input
                type="radio"
                id="cold"
                name="weatherCondition"
                value="cold"
              />
              <label htmlFor="cold">Cold</label>
            </div>
          </fieldset>
        </ModalWithForm>
        <Footer />
      </div>
    </div>
  );
}

export default App;
