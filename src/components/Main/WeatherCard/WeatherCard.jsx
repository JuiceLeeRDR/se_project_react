import "./WeatherCard.css";
import { weatherOptions } from "../../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  console.log("filtered results:", filteredOptions);
  const weatherOptionUrl = filteredOptions[0]?.url;
  const weatherOptionCondition = filteredOptions[0]?.condition;

  return (
    <div className="weather-card">
      <p className="weather-card__temperature">{weatherData.temp.F}&deg;F</p>
      <img
        src={weatherOptionUrl}
        alt={`${weatherOptionCondition}`}
        className="weather-card__image"
      />
    </div>
  );
}

export default WeatherCard;
