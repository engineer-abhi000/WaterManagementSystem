import AnimatedCard from "../components/common/AnimatedCard";
import {
  Droplets,
  Recycle,
  Leaf,
  AlertTriangle
} from "lucide-react";

const Sustainability = () => {
  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>🌱 Sustainability & Impact</h2>

      {/* SCORE */}
      <AnimatedCard>
        <div className="card sustainability-score">
          <h3>Overall Sustainability Score</h3>
          <div className="score-circle">82%</div>
          <p>Good – Improvement possible</p>
        </div>
      </AnimatedCard>

      {/* KPIs */}
      <div className="stats-grid">
        <AnimatedCard delay={0.1}>
          <div className="kpi-card green">
            <Leaf size={20} /> Water Saved
            <p>1,250 L</p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <div className="kpi-card blue">
            <Recycle size={20} /> Reused Water
            <p>420 L</p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <div className="kpi-card orange">
            <Droplets size={20} /> Rainwater Used
            <p>310 L</p>
          </div>
        </AnimatedCard>
      </div>

      {/* RECOMMENDATIONS */}
      <AnimatedCard delay={0.4}>
        <div className="card">
          <h3>🧠 Smart Sustainability Recommendations</h3>
          <ul className="recommendation-list">
            <li>
              <AlertTriangle size={16} /> High usage during morning peak – enable
              flow limit
            </li>
            <li>
              <AlertTriangle size={16} /> Rain forecast detected – activate
              rainwater harvesting
            </li>
            <li>
              <AlertTriangle size={16} /> Grey water reuse can save ~15% monthly
              consumption
            </li>
          </ul>
        </div>
      </AnimatedCard>

      {/* ACTION TOGGLES */}
      <AnimatedCard delay={0.5}>
        <div className="card">
          <h3>⚙ Sustainability Actions</h3>
          <div className="action-toggle">
            <label>
              <input type="checkbox" /> Enable Rainwater Harvesting
            </label>
          </div>
          <div className="action-toggle">
            <label>
              <input type="checkbox" /> Enable Grey Water Reuse
            </label>
          </div>
          <div className="action-toggle">
            <label>
              <input type="checkbox" /> Activate Water-Saving Mode
            </label>
          </div>
        </div>
      </AnimatedCard>

      {/* AWARENESS */}
      <AnimatedCard delay={0.6}>
        <div className="card awareness">
          <h3>📢 Did You Know?</h3>
          <p>
            Fixing a small leakage can save up to <strong>30,000 liters</strong>{" "}
            of water per year.
          </p>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Sustainability;
