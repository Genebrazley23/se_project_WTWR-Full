import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Profile from "../profile/profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";
import { getItems } from "/src/utils/Api.js";

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
  const [activeClothingItem, setActiveClothingItem] = useState();

  const openItemModal = (item) => {
    setSelectedCard(item);
    setActiveModal("item");
  };

  const showNewClothesForm = () => {
    setActiveModal("newClothes");
  };

  const closeModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };

  const handleSubmitGarment = (garment) => {
    console.log(garment);
    const clothingId = clothingItems.map((c) => c._id);
    const maxId = clothingId.length ? Math.max(...clothingId) : 0;
    garment._id = maxId + 1;
    setClothingItems((prev) => [garment, ...prev]);
    closeModal();
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const handleDelete = () => {
    const index = clothingItems.indexOf(activeClothingItem);
    const clothingItemsCopy = [...clothingItems];
    clothingItemsCopy.splice(index, 1);
    setClothingItems(clothingItemsCopy);

    closeModal();
  };

  const confirmDelete = (clothingItem) => {
    setActiveModal("deleteConfirmation");
    setActiveClothingItem(clothingItem);
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
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <BrowserRouter>
          <div className="page__content">
            <Header
              handleAddClothesBtnClick={showNewClothesForm}
              weatherData={weatherData}
              handleToggleSwitchChange={handleToggleSwitchChange}
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
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    clothingItems={clothingItems}
                    handleAddClothesBtnClick={showNewClothesForm}
                    onCardClick={openItemModal}
                  />
                }
              />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>

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
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
