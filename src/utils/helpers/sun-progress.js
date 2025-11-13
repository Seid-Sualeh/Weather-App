export const getSunProgress = (
  currentTime,
  sunrise,
  sunset,
  timezoneOffset
) => {
  const current = new Date((currentTime + timezoneOffset) * 1000);
  const sunriseDate = new Date((sunrise + timezoneOffset) * 1000);
  const sunsetDate = new Date((sunset + timezoneOffset) * 1000);

  // If it's before sunrise or after sunset, return 0 or 100
  if (current < sunriseDate) return 0;
  if (current > sunsetDate) return 100;

  // Calculate progress percentage
  const totalDaylight = sunsetDate - sunriseDate;
  const currentProgress = current - sunriseDate;

  return Math.round((currentProgress / totalDaylight) * 100);
};

export const getTimeOfDay = (currentTime, sunrise, sunset, timezoneOffset) => {
  const current = new Date((currentTime + timezoneOffset) * 1000);
  const currentHours = current.getUTCHours();
  const currentMinutes = current.getUTCMinutes();

  const sunriseDate = new Date((sunrise + timezoneOffset) * 1000);
  const sunsetDate = new Date((sunset + timezoneOffset) * 1000);

  const sunriseHours = sunriseDate.getUTCHours();
  const sunriseMinutes = sunriseDate.getUTCMinutes();
  const sunsetHours = sunsetDate.getUTCHours();
  const sunsetMinutes = sunsetDate.getUTCMinutes();

  // Convert to minutes for easier comparison
  const currentTotalMinutes = currentHours * 60 + currentMinutes;
  const sunriseTotalMinutes = sunriseHours * 60 + sunriseMinutes;
  const sunsetTotalMinutes = sunsetHours * 60 + sunsetMinutes;

  if (currentTotalMinutes < sunriseTotalMinutes) return "night";
  if (currentTotalMinutes < sunriseTotalMinutes + 60) return "sunrise";
  if (currentTotalMinutes < sunsetTotalMinutes - 60) return "day";
  if (currentTotalMinutes < sunsetTotalMinutes) return "sunset";
  return "night";
};

// Get time until next sun event
export const getTimeUntilNextEvent = (
  currentTime,
  sunrise,
  sunset,
  timezoneOffset
) => {
  const current = new Date((currentTime + timezoneOffset) * 1000);
  const nextSunrise = new Date((sunrise + timezoneOffset) * 1000);
  const nextSunset = new Date((sunset + timezoneOffset) * 1000);

  // If we're before sunrise today
  if (current < nextSunrise) {
    const diff = nextSunrise - current;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { event: "sunrise", hours, minutes };
  }

  // If we're before sunset today
  if (current < nextSunset) {
    const diff = nextSunset - current;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { event: "sunset", hours, minutes };
  }

  // If we're after sunset, next event is sunrise tomorrow
  const nextSunriseTomorrow = new Date(
    nextSunrise.getTime() + 24 * 60 * 60 * 1000
  );
  const diff = nextSunriseTomorrow - current;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { event: "sunrise", hours, minutes };
};
