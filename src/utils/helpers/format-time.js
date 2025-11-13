export const formatTime = (timestamp, timezoneOffset) => {
  // Convert UTC timestamp to local time using timezone offset
  const date = new Date((timestamp + timezoneOffset) * 1000);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatTimeWithSeconds = (timestamp, timezoneOffset) => {
  const date = new Date((timestamp + timezoneOffset) * 1000);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

export const getDayDuration = (sunrise, sunset, timezoneOffset) => {
  const sunriseTime = new Date((sunrise + timezoneOffset) * 1000);
  const sunsetTime = new Date((sunset + timezoneOffset) * 1000);

  const durationMs = sunsetTime - sunriseTime;
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
};
