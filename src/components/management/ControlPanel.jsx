const ControlPanel = ({ onAction }) => {
  return (
    <>
      <h3 className="section-title">🎛 Control Actions</h3>
      <div className="control-grid">
        <button onClick={() => onAction("REFILL_TANK")}>Refill Tank</button>
        <button onClick={() => onAction("RESTRICT_USAGE")}>Restrict Usage</button>
        <button onClick={() => onAction("OPEN_SUPPLY")}>Open Full Supply</button>
      </div>
    </>
  );
};

export default ControlPanel;
