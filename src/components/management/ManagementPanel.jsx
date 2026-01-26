const ManagementPanel = ({ actions, alerts }) => {
  return (
    <>
      <h3 className="section-title">🧠 Water Management Decisions</h3>

      {alerts.length > 0 && (
        <div className="alert-box">
          <h4>Alerts</h4>
          {alerts.map((a, i) => (
            <p key={i}>⚠ {a}</p>
          ))}
        </div>
      )}

      <div className="action-box">
        <h4>System Actions</h4>
        {actions.map((a, i) => (
          <p key={i}>✔ {a}</p>
        ))}
      </div>
    </>
  );
};

export default ManagementPanel;
