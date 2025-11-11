export const getCountryName = (countryCode) => {
  const countryNames = {
    US: "United States",
    GB: "United Kingdom",
    FR: "France",
    DE: "Germany",
    IT: "Italy",
    ES: "Spain",
    ET: "Ethiopia",
    IN: "India",
    CN: "China",
    JP: "Japan",
    BR: "Brazil",
    CA: "Canada",
    AU: "Australia",
    ZA: "South Africa",
    NG: "Nigeria",
    KE: "Kenya",
    EG: "Egypt",
    // Add more countries as needed
  };

  return countryNames[countryCode] || countryCode;
};
