const ReportSummary = () => {
  return (
    <div className="stats-grid">
      <div className="kpi-card blue">
        <h5>Total Usage</h5>
        <p>4200 L</p>
      </div>

      <div className="kpi-card green">
        <h5>Avg / Day</h5>
        <p>140 L</p>
      </div>

      <div className="kpi-card orange">
        <h5>Efficiency</h5>
        <p>82%</p>
      </div>
    </div>
  );
};

export default ReportSummary;
