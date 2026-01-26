const API_KEY = "f289c763ebb9ff65bb4e35d84d10af81";

export const getWeatherByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  const data = await res.json();

  return {
    temp: data.main.temp,
    humidity: data.main.humidity,
    rain: data.rain?.["1h"] || 0
  };
};
