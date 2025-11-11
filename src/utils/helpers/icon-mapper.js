const getWeatherIcon = (weatherCode) => {
  const iconMap = {
    "01d": "☀️",
    "01n": "🌙",
    "02d": "⛅",
    "02n": "⛅",
    "03d": "☁️",
    "03n": "☁️",
    "04d": "☁️",
    "04n": "☁️",
    "09d": "🌧️",
    "09n": "🌧️",
    "10d": "🌦️",
    "10n": "🌦️",
    "11d": "⛈️",
    "11n": "⛈️",
    "13d": "❄️",
    "13n": "❄️",
    "50d": "🌫️",
    "50n": "🌫️",
  };

  return iconMap[weatherCode] || "🌤️";
};
export { getWeatherIcon };
const getWeatherCondition = (weatherId) => {
  if (weatherId >= 200 && weatherId < 300) return "Thunderstorm";
  if (weatherId >= 300 && weatherId < 400) return "Drizzle";
  if (weatherId >= 500 && weatherId < 600) return "Rain";
  if (weatherId >= 600 && weatherId < 700) return "Snow";
  if (weatherId >= 700 && weatherId < 800) return "Atmosphere";
  if (weatherId === 800) return "Clear";
  if (weatherId > 800) return "Clouds";
  return "Unknown";
};
export { getWeatherCondition };

const formatTemperature = (temp) => {
  return `${Math.round(temp)}°C`;
};
export { formatTemperature };
