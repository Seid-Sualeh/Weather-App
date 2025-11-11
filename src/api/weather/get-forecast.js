import { API_CONFIG } from "../../utils/configs/api-config";

export const getWeatherForecast = async (city) => {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/forecast?q=${city}&appid=${API_CONFIG.API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch forecast");
  }
};
