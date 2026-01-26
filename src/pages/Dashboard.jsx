import { useState } from "react";
import { useDashboard } from "../hooks/useDashboard";
import CitySelector from "../components/weather/CitySelector";
import WeatherOverview from "../components/weather/WeatherOverview";
import StatsCards from "../components/dashboard/StatsCards";
import TankMonitor from "../components/dashboard/TankMonitor";
import UsageChart from "../components/charts/UsageChart";
import ManagementPanel from "../components/management/ManagementPanel";
import ControlPanel from "../components/management/ControlPanel";
import { manageWater } from "../utils/waterManager";
import AnimatedCard from "../components/common/AnimatedCard";

const Dashboard = () => {
  const [city, setCity] = useState("Mumbai");

  // ✅ DECLARE data HERE
  const { data, loading, error } = useDashboard(city);

  // ✅ GUARD
  if (loading || !data) {
    return <p>Loading dashboard...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  // ✅ SAFE USAGE (AFTER data EXISTS)
  const management = manageWater({
    tankLevel: data.tankLevel,
    dailyUsage: data.dailyUsage,
    weather: data.weather,
  });

  const handleControlAction = (action) => {
    alert(`Action executed: ${action}`);
  };

  return (
    <div className="container">
      <CitySelector city={city} setCity={setCity} />

      <div className="dashboard-grid">
        <AnimatedCard delay={0.1}>
          <div className="card">
            <WeatherOverview weather={data.weather} />
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <div className="card">
            <TankMonitor level={data.tankLevel} />
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <div className="card full-width">
            <StatsCards stats={data} />
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <div className="card full-width">
            <UsageChart data={data.weeklyUsage} />
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.5}>
          <div className="card full-width">
            <ManagementPanel
              actions={management.actions}
              alerts={management.alerts}
            />
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.6}>
          <div className="card full-width">
            <ControlPanel onAction={handleControlAction} />
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Dashboard;
