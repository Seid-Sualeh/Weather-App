import React from "react";
import Card from "../../../components/card/card";
import {
  formatTemperature,
  getWeatherIcon,
} from "../../../utils/helpers/icon-mapper";
import "./forecast-display.css";

const ForecastDisplay = ({ data, currentWeather }) => {
  if (!data || !data.list) return null;

  // Group forecasts by day and take one reading per day
  const dailyForecasts = data.list
    .filter((item, index) => index % 8 === 0)
    .slice(0, 5);

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="forecast">
      <div className="forecast-header">
        <h3 className="forecast-title">5-Day Forecast</h3>
        {currentWeather && (
          <div className="forecast-location">
            {currentWeather.name}, {currentWeather.sys.country}
          </div>
        )}
      </div>
      <div className="forecast-list">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-date">{formatDate(day.dt)}</div>
            <div className="forecast-icon">
              {getWeatherIcon(day.weather[0].icon)}
            </div>
            <div className="forecast-temps">
              <span className="temp-high">
                {formatTemperature(day.main.temp_max)}
              </span>
              <span className="temp-low">
                {formatTemperature(day.main.temp_min)}
              </span>
            </div>
            <div className="forecast-description">
              {day.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ForecastDisplay;
