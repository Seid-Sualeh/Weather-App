export const getSunProgress = (currentTime, sunrise, sunset, timezone) => {
  const current = new Date((currentTime + timezone) * 1000);
  const sunriseDate = new Date((sunrise + timezone) * 1000);
  const sunsetDate = new Date((sunset + timezone) * 1000);

  const currentHours = current.getHours() + current.getMinutes() / 60;
  const sunriseHours = sunriseDate.getHours() + sunriseDate.getMinutes() / 60;
  const sunsetHours = sunsetDate.getHours() + sunsetDate.getMinutes() / 60;

  // If it's before sunrise or after sunset, return 0 or 100
  if (currentHours < sunriseHours) return 0;
  if (currentHours > sunsetHours) return 100;

  // Calculate progress percentage
  const totalDaylight = sunsetHours - sunriseHours;
  const currentProgress = currentHours - sunriseHours;

  return Math.round((currentProgress / totalDaylight) * 100);
};

export const getTimeOfDay = (currentTime, sunrise, sunset, timezone) => {
  const current = new Date((currentTime + timezone) * 1000);
  const currentHours = current.getHours();

  if (currentHours >= 5 && currentHours < 12) return "morning";
  if (currentHours >= 12 && currentHours < 17) return "afternoon";
  if (currentHours >= 17 && currentHours < 21) return "evening";
  return "night";
};
