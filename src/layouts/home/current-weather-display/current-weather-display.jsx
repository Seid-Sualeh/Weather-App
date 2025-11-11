// import React from "react";
// import Card from "../../components/card";
// import {
//   formatTemperature,
//   getWeatherIcon,
//   getWeatherCondition,
// } from "../../utils/helpers/icon-mapper";
// import "./current-weather-display.css";

// const CurrentWeatherDisplay = ({ data }) => {
//   if (!data) return null;

//   const { name, main, weather, wind } = data;
//   const weatherInfo = weather[0];

//   return (
//     <Card className="current-weather">
//       <div className="weather-header">
//         <h2 className="city-name">{name}</h2>
//         <div className="weather-main">
//           <span className="weather-icon">
//             {getWeatherIcon(weatherInfo.icon)}
//           </span>
//           <div className="temperature">{formatTemperature(main.temp)}</div>
//         </div>
//         <p className="weather-description">
//           {getWeatherCondition(weatherInfo.id)}
//         </p>
//       </div>

//       <div className="weather-details">
//         <div className="detail-item">
//           <span className="detail-label">Feels like</span>
//           <span className="detail-value">
//             {formatTemperature(main.feels_like)}
//           </span>
//         </div>
//         <div className="detail-item">
//           <span className="detail-label">Humidity</span>
//           <span className="detail-value">{main.humidity}%</span>
//         </div>
//         <div className="detail-item">
//           <span className="detail-label">Wind Speed</span>
//           <span className="detail-value">{wind.speed} m/s</span>
//         </div>
//         <div className="detail-item">
//           <span className="detail-label">Pressure</span>
//           <span className="detail-value">{main.pressure} hPa</span>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default CurrentWeatherDisplay;

import React from "react";
import Card from "../../components/card";
import {
  formatTemperature,
  getWeatherIcon,
  getWeatherCondition,
} from "../../utils/helpers/icon-mapper";
import { getCountryName } from "../../utils/helpers/country-names";
import "./current-weather-display.css";

const CurrentWeatherDisplay = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind, sys } = data;
  const weatherInfo = weather[0];

  return (
    <Card className="current-weather">
      <div className="weather-header">
        <div className="location-info">
          <h2 className="city-name">{name}</h2>
          <p className="country-name">{sys.country}</p>

          <p className="country-name">{getCountryName(sys.country)}</p>
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
      </div>
    </Card>
  );
};

export default CurrentWeatherDisplay;
