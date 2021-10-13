const appid = "69e4620d6d86b9fc3e3f7b0ce3d80160"
export const getWeatherUrl =({city, countryCode}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
export const getForecastUrl =({city, countryCode}) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`