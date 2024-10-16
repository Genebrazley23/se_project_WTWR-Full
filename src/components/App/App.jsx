import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { defaultClothingItems } from "../../utils/constants";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { filterWeatherData, getWeather } from "../../utils/weatherApi.js";
import Footer from "../Footer/Footer.jsx";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const openItemModal = (item) => {
    setSelectedCard(item);
    setActiveModal("item");
  };

  const showNewClothesForm = () => setActiveModal("newClothes");

  const closeModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };

  const handleSubmitGarment = (garment) => {
    const clothingId = clothingItems.map((c) => c._id);
    const maxId = clothingId.length ? Math.max(...clothingId) : 0;
    garment._id = maxId + 1;
    setClothingItems((prev) => [...prev, garment]);
    closeModal();
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleAddClothesBtnClick={showNewClothesForm}
          weatherData={weatherData}
        />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={openItemModal}
          handleCardButton={openItemModal}
        />
        <Footer />
      </div>

      {activeModal === "newClothes" && (
        <ModalWithForm
          handleSubmit={handleSubmitGarment}
          handleCloseModal={closeModal}
        />
      )}
      {activeModal === "item" && (
        <ItemModal isOpen={true} item={selectedCard} handleClose={closeModal} />
      )}
    </div>
  );
}

export default App;
