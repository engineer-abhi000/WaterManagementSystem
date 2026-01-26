const TankMonitor = ({ level }) => {
  let status = "Normal";
  let color = "green";

  if (level < 40) {
    status = "Critical";
    color = "red";
  } else if (level < 70) {
    status = "Warning";
    color = "orange";
  }

  return (
    <div className="card">
      <h4>Tank Level</h4>
      <div className="tank">
        <div
          className="tank-fill"
          style={{ width: `${level}%`, background: color }}
        >
          {level}%
        </div>
      </div>
      <p>Status: <b style={{ color }}>{status}</b></p>
    </div>
  );
};

export default TankMonitor;
