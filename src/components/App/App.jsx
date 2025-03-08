import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main.jsx";
import { defaultClothingItems } from "../../utils/constants";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { filterWeatherData, getWeather } from "../../utils/weatherApi.js";
import Footer from "../Footer/Footer.jsx";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import Profile from "../profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";
import {
  getItems,
  addItem,
  deleteItem,
  signin,
  signup,
  getMe,
  updateUserProfile,
} from "../../utils/Api.js";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { toggleLiked } from "../../utils/Api.js";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("jwt");

  return isLoggedIn ? element : <Navigate to="/login" />;
};

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeClothingItem, setActiveClothingItem] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openItemModal = (item) => {
    setSelectedCard(item);
    setActiveModal("item");
  };

  const showNewClothesForm = () => {
    setActiveModal("newClothes");
  };

  const handleLikeClick = (item) => {
    const jwt = localStorage.getItem("jwt");
    toggleLiked(jwt, item)
      .then(({ data }) => {
        setClothingItems((prev) =>
          prev.map((i) => (i._id === item._id ? data : i))
        );
      })
      .catch((error) => console.error(error));
  };

  const closeModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };

  const handleSubmitGarment = (garment) => {
    const jwt = localStorage.getItem("jwt");
    addItem(jwt, garment)
      .then((res) => {
        setClothingItems((prev) => [res.data, ...prev]);
        closeModal();
      })
      .catch((error) => console.error(error));
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const handleDelete = () => {
    const jwt = localStorage.getItem("jwt");
    deleteItem(jwt, activeClothingItem._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== activeClothingItem._id)
        );
        closeModal();
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  const confirmDelete = (clothingItem) => {
    setActiveModal("deleteConfirmation");
    setActiveClothingItem(clothingItem);
  };

  const showLoginForm = () => {
    setActiveModal("login");
  };

  const handleLogin = (email, password) => {
    signin(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setCurrentUser(res.user);
        closeModal();
      })
      .catch((error) => console.error(error));
  };

  const showRegisterForm = () => {
    setActiveModal("register");
  };

  const handleRegister = (name, avatar, email, password) => {
    signup(name, avatar, email, password)
      .then((res) => {
        closeModal();
      })
      .catch((error) => console.error(error));
  };

  const handleEditProfile = (updatedData) => {
    const jwt = localStorage.getItem("jwt");
    updateUserProfile(jwt, updatedData.name, updatedData.avatar)
      .then((res) => {
        setCurrentUser(res.data);
        closeModal();
      })
      .catch((error) => console.error("Error updating profile:", error));
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    getItems(token)
      .then((res) => {
        setClothingItems([...res.data]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      getMe(jwt)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <HashRouter>
            <div className="page__content">
              <Header
                handleAddClothesBtnClick={showNewClothesForm}
                weatherData={weatherData}
                handleToggleSwitchChange={handleToggleSwitchChange}
                handleSignInBtnClick={showLoginForm}
                handleSignUpBtnClick={showRegisterForm}
                handleEditProfileBtnClick={() => setActiveModal("editProfile")}
              />

              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weatherData={weatherData}
                      clothingItems={clothingItems}
                      onCardClick={openItemModal}
                      handleCardButton={openItemModal}
                      onCardLike={handleLikeClick}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute
                      element={
                        <Profile
                          clothingItems={clothingItems}
                          handleAddClothesBtnClick={showNewClothesForm}
                          onCardClick={openItemModal}
                          onCardLike={handleLikeClick}
                          handleLogout={handleLogout}
                          setActiveModal={setActiveModal}
                        />
                      }
                    />
                  }
                />
              </Routes>

              <Footer />
            </div>
          </HashRouter>

          {activeModal === "newClothes" && (
            <AddItemModal
              isOpen={true}
              onAddItem={handleSubmitGarment}
              onCloseModal={closeModal}
            />
          )}
          {activeModal === "item" && (
            <ItemModal
              isOpen={true}
              item={selectedCard}
              handleClose={closeModal}
              handleDeleteButton={confirmDelete}
            />
          )}
          {activeModal === "deleteConfirmation" && (
            <ConfirmationModal
              isOpen={true}
              handleClose={closeModal}
              handleClick={handleDelete}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              isOpen={true}
              onCloseModal={closeModal}
              onLogin={handleLogin}
              onSignUpClick={showRegisterForm}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              isOpen={true}
              onCloseModal={closeModal}
              onRegister={handleRegister}
              onSignClick={showLoginForm}
            />
          )}
          {activeModal === "editProfile" && (
            <EditProfileModal
              isOpen={true}
              userData={currentUser}
              onSave={handleEditProfile}
              onCloseModal={closeModal}
              token={localStorage.getItem("jwt")}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
