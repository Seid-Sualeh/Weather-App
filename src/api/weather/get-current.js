import { API_CONFIG } from "../../utils/configs/api-config";

export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/weather?q=${city}&appid=${API_CONFIG.API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch current weather");
  }
};
