export const manageWater = ({
  tankLevel = 0,
  dailyUsage = 0,
  weather = {}
}) => {
  const actions = [];
  const alerts = [];

  if (tankLevel < 40) {
    alerts.push("⚠ Tank level is low");
    actions.push("Reduce water supply to non-essential areas");
  }

  if (dailyUsage > 150) {
    alerts.push("🚨 High water usage detected");
    actions.push("Activate usage restriction mode");
  }

  if (weather.rain > 0) {
    actions.push("Delay tank refill due to rain forecast");
  }

  return { actions, alerts };
};
