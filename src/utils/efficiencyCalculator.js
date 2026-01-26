export const calculateEfficiency = (usage, rain) => {
  let score = 100;

  if (usage > 150) score -= 20;
  if (rain > 0) score += 10;

  return Math.min(100, Math.max(0, score));
};

<h4>🌱 Water Efficiency Score: {score}%</h4>
