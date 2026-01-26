export const predictNextDayUsage = (weekly) => {
  const avg =
    weekly.reduce((sum, d) => sum + d.usage, 0) / weekly.length;
  return Math.round(avg + 10);
};
