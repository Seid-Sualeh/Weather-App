export const formatTime = (timestamp, timezoneOffset) => {
  // timestamp is in UTC, timezoneOffset is in seconds
  // Create a date object in UTC
  const date = new Date(timestamp * 1000);

  // Convert to local time using the timezone offset
  const localTime = new Date(date.getTime() + timezoneOffset * 1000);

  return localTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC", // We're manually adjusting for timezone, so use UTC as base
  });
};

export const formatTimeWithSeconds = (timestamp, timezoneOffset) => {
  const date = new Date(timestamp * 1000);
  const localTime = new Date(date.getTime() + timezoneOffset * 1000);

  return localTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
};

export const getDayDuration = (sunrise, sunset, timezoneOffset) => {
  const sunriseTime = new Date(sunrise * 1000);
  const sunsetTime = new Date(sunset * 1000);

  // Both times are in UTC, so we can directly calculate the difference
  const durationMs = sunsetTime - sunriseTime;
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
};

// New function to get current time in the city's timezone
export const getCurrentCityTime = (timezoneOffset) => {
  const now = new Date();
  const cityTime = new Date(now.getTime() + timezoneOffset * 1000);

  return cityTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
};

// Function to check if it's currently day or night
export const isDayTime = (currentTime, sunrise, sunset, timezoneOffset) => {
  const current = new Date((currentTime + timezoneOffset) * 1000);
  const sunriseTime = new Date((sunrise + timezoneOffset) * 1000);
  const sunsetTime = new Date((sunset + timezoneOffset) * 1000);

  return current >= sunriseTime && current < sunsetTime;
};
