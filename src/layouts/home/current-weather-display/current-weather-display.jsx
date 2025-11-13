import React from "react";
import Card from "../../../components/card/card";
import {
  formatTemperature,
  getWeatherIcon,
  getWeatherCondition,
} from "../../../utils/helpers/icon-mapper";
import { getDisplayCountry } from "../../../utils/helpers/country-names";
import { formatTime, getDayDuration } from "../../../utils/helpers/format-time";
import {
  getSunProgress,
  getTimeOfDay,
} from "../../../utils/helpers/sun-progress";
import "./current-weather-display.css";

const CurrentWeatherDisplay = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind, sys, timezone, dt } = data;
  const weatherInfo = weather[0];

  // Use the conditional function to get country display
  const countryDisplay = getDisplayCountry(sys.country);

  // Format sunrise and sunset times
  const sunriseTime = formatTime(sys.sunrise, timezone);
  const sunsetTime = formatTime(sys.sunset, timezone);
  const dayDuration = getDayDuration(sys.sunrise, sys.sunset, timezone);

  // Calculate sun progress and time of day
  const sunProgress = getSunProgress(dt, sys.sunrise, sys.sunset, timezone);
  const timeOfDay = getTimeOfDay(dt, sys.sunrise, sys.sunset, timezone);

  return (
    <Card className="current-weather">
      <div className="weather-header">
        <div className="location-info">
          <h2 className="city-name">{name}</h2>
          <p className="country-name">{countryDisplay}</p>
          <div className="time-of-day-badge">
            {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
          </div>
        </div>
        <div className="weather-main">
          <span className="weather-icon">
            {getWeatherIcon(weatherInfo.icon)}
          </span>
          <div className="temperature">{formatTemperature(main.temp)}</div>
        </div>
        <p className="weather-description">
          {getWeatherCondition(weatherInfo.id)}
        </p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels like</span>
          <span className="detail-value">
            {formatTemperature(main.feels_like)}
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{main.pressure} hPa</span>
        </div>

        {/* Enhanced Sun Times Section */}
        <div className="sun-times">
          <div className="sun-time-item">
            <div className="sun-icon sunrise">🌅</div>
            <div className="sun-time-info">
              <span className="sun-label">Sunrise</span>
              <span className="sun-time">{sunriseTime}</span>
            </div>
          </div>

          <div className="sun-progress-container">
            <div className="sun-progress-bar">
              <div
                className="sun-progress-fill"
                style={{ width: `${sunProgress}%` }}
              ></div>
              <div
                className="sun-progress-indicator"
                style={{ left: `${sunProgress}%` }}
              >
                <div className="current-sun">☀️</div>
              </div>
            </div>
            <div className="sun-progress-labels">
              <span>Sunrise</span>
              <span>Sunset</span>
            </div>
            <div className="progress-percentage">
              {sunProgress}% of daylight passed
            </div>
          </div>

          <div className="sun-time-item">
            <div className="sun-icon sunset">🌇</div>
            <div className="sun-time-info">
              <span className="sun-label">Sunset</span>
              <span className="sun-time">{sunsetTime}</span>
            </div>
          </div>

          <div className="day-duration">
            <span className="duration-label">Day Length</span>
            <span className="duration-value">{dayDuration}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeatherDisplay;
