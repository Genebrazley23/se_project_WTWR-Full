import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
function Main({ weatherData, clothingItems, onCardClick, onCardLike }) {
  const currentTemperatureUnitContext = useContext(
    CurrentTemperatureUnitContext
  );
  console.log(clothingItems, weatherData);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is{" "}
          {
            weatherData.temp[
              currentTemperatureUnitContext.currentTemperatureUnit
            ]
          }
          ° {currentTemperatureUnitContext.currentTemperatureUnit}/ You may want
          to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => item.weather === weatherData.type)
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
