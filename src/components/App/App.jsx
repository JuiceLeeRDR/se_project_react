import { React, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LogIn from "../LogInModal/LogInModal.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Profile from "../../components/Profile/Profile.jsx";
import { coordinates, APIkey } from "../../utils/constants";
import { getWeatherData, processTempRanges } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../../src/contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal.jsx";
import { getItems, postNewItems, deleteItems } from "../../utils/api.js";
import * as api from "../../utils/auth.js";
import { setToken, signUp, getToken, signIn } from "../../utils/auth.js";
import EditProfileModal from "../Profile/EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

  const handleSignUpBtnClick = () => {
    setActiveModal("sign-up");
  };

  const handleLogInBtnClick = () => {
    setActiveModal("log-in");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogOutBtnClick = () => {
    setIsLoggedIn(false);
  };

  const onAddItem = ({ name, imageUrl, weather }) => {
    console.log("Data being sent:", { name, imageUrl, weather });
    postNewItems({ name, imageUrl, weather })
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

  const handleRegistration = ({ name, avatar, email, password }) => {
    signUp({ name, avatar, email, password })
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          api
            .checkToken(data.token)
            .then((data) => {
              setIsLoggedIn(true);
              setCurrentUser(data);
              closeActiveModal();
            })
            .catch(console.error);
          navigate("/profile");
        }
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    signIn({ email, password })
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          api
            .checkToken(data.token)
            .then((data) => {
              setIsLoggedIn(true);
              setCurrentUser(data);
              closeActiveModal();
            })
            .catch(console.error);
          navigate("/profile");
        }
      })
      .catch(console.error);
  };

  const handleProfileUpdate = ({ name, avatar }) => {
    api
      .updateProfile({ name, avatar })
      .then((updatedUser) => {
        setCurrentUser((prev) => ({
          ...prev,
          name: updatedUser.name,
          avatar: updatedUser.avatar,
        }));
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
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
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    api
      .checkToken(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
        navigate("/");
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddBtnClick={handleAddBtnClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              registerClick={handleSignUpBtnClick}
              logInClick={handleLogInBtnClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onSelectCard={handleSelectedCard}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onSelectCard={handleSelectedCard}
                      clothingItems={clothingItems}
                      handleAddBtnClick={handleAddBtnClick}
                      // currentUser={currentUser}
                      handleLogOutBtnClick={handleLogOutBtnClick}
                      handleEditProfileClick={handleEditProfileClick}
                      isLoggedIn={isLoggedIn}
                      onCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  !isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Navigate to="/profile" replace />
                  )
                }
              />
            </Routes>
            <RegisterModal
              isOpen={activeModal === "sign-up"}
              handleCloseClick={closeActiveModal}
              registerClick={handleSignUpBtnClick}
              handleRegistration={handleRegistration}
              handleLogIn={handleLogInBtnClick}
            />
            <LogIn
              isOpen={activeModal === "log-in"}
              handleCloseClick={closeActiveModal}
              logInClick={handleLogInBtnClick}
              handleLogin={handleLogin}
              data={data}
              handleSignUpBtnClick={handleSignUpBtnClick}
            />
            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              handleCloseClick={closeActiveModal}
              deleteClick={handleDeleteBtnClick}
              isOpen={activeModal === "preview"}
              isLoggedIn={isLoggedIn}
              // currentUser={currentUser}
              selectedCard={selectedCard}
            />
            <DeleteItemModal
              activeModal={activeModal}
              handleCloseClick={closeActiveModal}
              onDeleteItem={onDeleteItem}
              card={selectedCard}
              data={data}
            />
            <AddItemModal
              isOpen={activeModal === "add-garment"}
              handleCloseClick={closeActiveModal}
              onAddItem={onAddItem}
              card={selectedCard}
            />
            <EditProfileModal
              isOpen={activeModal === "edit-profile"}
              handleCloseClick={closeActiveModal}
              // currentUser={currentUser}
              handleProfileUpdate={handleProfileUpdate}
            />

            <Footer />
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
