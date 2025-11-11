import React, { useState, useEffect } from "react";
import SearchInput from "../../layouts/common/search-input";
import CurrentWeatherDisplay from "../../layouts/home/current-weather-display";
import ForecastDisplay from "../../layouts/home/forecast-display";
import Card from "../../components/card";
import { getCurrentWeather } from "../../api/weather/get-current";
import { getWeatherForecast } from "../../api/weather/get-forecast";
import "./home.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const DEFAULT_CITY = "Dessie";

  const fetchWeatherData = async (cityName = DEFAULT_CITY) => {
    setLoading(true);
    setError("");

    try {
      const [currentData, forecastData] = await Promise.all([
        getCurrentWeather(cityName),
        getWeatherForecast(cityName),
      ]);

      setCurrentWeather(currentData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData(city.trim());
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  //   return (
  //     <div className="home-container">
  //       <div className="weather-app">
  //         <header className="app-header">
  //           <h1 className="app-title">Weather Forecast</h1>
  //           <p className="app-subtitle">Get real-time weather information</p>
  //         </header>

  //         <div className="search-section">
  //           <SearchInput
  //             value={city}
  //             onChange={setCity}
  //             onSearch={handleSearch}
  //             loading={loading}
  //           />
  //         </div>

  //         <div className="weather-content">
  //           {loading && (
  //             <Card className="loading-state">
  //               <div className="loading-spinner"></div>
  //               <p>Loading weather data...</p>
  //             </Card>
  //           )}

  //           {error && (
  //             <Card className="error-state">
  //               <div className="error-icon">⚠️</div>
  //               <h3>Oops! Something went wrong</h3>
  //               <p>{error}</p>
  //               <button className="retry-btn" onClick={() => fetchWeatherData()}>
  //                 Try Again
  //               </button>
  //             </Card>
  //           )}

  //           {!loading && !error && currentWeather && (
  //             <>
  //               <CurrentWeatherDisplay data={currentWeather} />
  //               <ForecastDisplay data={forecast} />
  //             </>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="home-container">
      <div className="weather-app">
        <header className="app-header">
          <div className="header-div">
            <img
              src="../../../public/ChatGPT Image Nov 11, 2025, 12_32_47 PM.png"
              className="image"
              alt=""
            />
            <h1 className="app-title">Weather Forecast</h1>
          </div>

          <p className="app-subtitle">Get real-time weather information</p>
        </header>

        <div className="search-section">
          <SearchInput
            value={city}
            onChange={setCity}
            onSearch={handleSearch}
            loading={loading}
          />
        </div>

        <div className="weather-content">
          {loading && (
            <Card className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading weather data...</p>
            </Card>
          )}

          {error && (
            <Card className="error-state">
              <div className="error-icon">⚠️</div>
              <h3>Oops! Something went wrong</h3>
              <p>{error}</p>
              <button className="retry-btn" onClick={() => fetchWeatherData()}>
                Try Again
              </button>
            </Card>
          )}

          {!loading && !error && currentWeather && (
            <>
              <CurrentWeatherDisplay data={currentWeather} />
              <ForecastDisplay
                data={forecast}
                currentWeather={currentWeather}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
