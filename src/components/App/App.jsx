import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Profile from "../../components/Profile/Profile.jsx";
import { coordinates, APIkey } from "../../utils/constants";
import { getWeatherData, processTempRanges } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../../src/contexts/CurrentTemperatureUnitContext.js";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal.jsx";
import { getItems, postNewItems, deleteItems } from "../../utils/api.js";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleSelectedCard = (card) => {
    setActiveModal("preview");

    setSelectedCard(card);
  };

  const handleDeleteBtnClick = () => {
    setActiveModal("delete");
  };

  const handleAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onAddItem = ({ name, imageUrl, weatherType }) => {
    postNewItems({ name, imageUrl, weatherType })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onDeleteItem = (card) => {
    deleteItems(card._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== card._id)
        );
        setSelectedCard({});
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeatherData(coordinates, APIkey)
      .then((data) => {
        const processedTempRange = processTempRanges(data);
        setWeatherData(processedTempRange);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        //set clothing items
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddBtnClick={handleAddBtnClick}
            weatherData={weatherData}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  //pass clothingItems as a prop
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  handleAddBtnClick={handleAddBtnClick}
                />
              }
            />
          </Routes>
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            handleCloseClick={closeActiveModal}
            deleteClick={handleDeleteBtnClick}
            isOpen={activeModal === "preview"}
          />
          <DeleteItemModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            onDeleteItem={onDeleteItem}
            card={selectedCard}
          />
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            handleCloseClick={closeActiveModal}
            onAddItem={onAddItem}
            card={selectedCard}
          />
          <Footer />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
