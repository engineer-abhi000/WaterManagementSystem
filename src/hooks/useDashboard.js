import { useEffect, useState } from "react";
import { getDashboardData } from "../services/waterStatsApi";

export const useDashboard = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getDashboardData(city)
      .then(res => {
        setData(res.data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [city]);

  return { data, loading, error };
};
