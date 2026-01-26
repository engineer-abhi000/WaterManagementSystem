import AnimatedCard from "../components/common/AnimatedCard";
import ReportSummary from "../components/reports/ReportSummary";
import MonthlyComparison from "../components/reports/MonthlyComparison";
import UsageBreakdown from "../components/reports/UsageBreakdown";
import Insights from "../components/reports/Insights";

const Reports = () => {
  const exportCSV = () => {
    const data = [
      ["Month", "Usage (L)"],
      ["Jan", 3800],
      ["Feb", 4100],
      ["Mar", 4200]
    ];

    const csv = data.map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "water-report.csv";
    link.click();
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>📊 Water Reports</h2>

      {/* SUMMARY KPIs */}
      <AnimatedCard>
        <ReportSummary />
      </AnimatedCard>

      {/* MONTHLY BAR CHART */}
      <AnimatedCard delay={0.2}>
        <MonthlyComparison />
      </AnimatedCard>

      {/* BREAKDOWN + INSIGHTS */}
      <div className="dashboard-grid">
        <AnimatedCard delay={0.3}>
          <UsageBreakdown />
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <Insights />
        </AnimatedCard>
      </div>

      {/* EXPORT */}
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={exportCSV}
          style={{
            padding: "12px 18px",
            borderRadius: "8px",
            border: "none",
            background: "#1976d2",
            color: "white",
            cursor: "pointer"
          }}
        >
          ⬇ Download Report (CSV)
        </button>
      </div>
    </div>
  );
};

export default Reports;
