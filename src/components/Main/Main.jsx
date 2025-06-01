import React from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="item-card__cntnr">
        <p className="item-card__temperature-text">
          Today is {weatherData.temp[currentTemperatureUnit]}&deg;/You may want
          to wear:
        </p>
        <ul className="item-cards__list">
          {clothingItems
            .filter((item) => {
              return item.weatherType === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onSelectCard={onSelectCard}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
