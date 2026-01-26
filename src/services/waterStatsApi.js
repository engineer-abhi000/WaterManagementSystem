import { getWeatherByCity } from "./weatherApi";

export const getDashboardData = async (city) => {
  const weather = await getWeatherByCity(city);

  return {
    data: {
      city,
      weather,

      dailyUsage: 140,
      monthlyUsage: 4200,
      leakage: false,
      tankLevel: 55,

      weeklyUsage: [
        { day: "Mon", usage: 120 },
        { day: "Tue", usage: 135 },
        { day: "Wed", usage: 140 },
        { day: "Thu", usage: 150 },
        { day: "Fri", usage: 145 },
        { day: "Sat", usage: 160 },
        { day: "Sun", usage: 155 }
      ]
    }
  };
};
