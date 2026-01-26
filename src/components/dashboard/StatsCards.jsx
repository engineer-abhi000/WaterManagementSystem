const StatsCards = ({ stats }) => {
  return (
    <div className="stats-grid">
      <div className="kpi-card blue">
        <h5>Daily Usage</h5>
        <p>{stats.dailyUsage} L</p>
      </div>

      <div className="kpi-card green">
        <h5>Monthly Usage</h5>
        <p>{stats.monthlyUsage} L</p>
      </div>

      <div className="kpi-card red">
        <h5>Leakage</h5>
        <p>{stats.leakage ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default StatsCards;
