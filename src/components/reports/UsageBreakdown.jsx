import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Domestic", value: 55 },
  { name: "Gardening", value: 25 },
  { name: "Cleaning", value: 20 }
];

const COLORS = ["#4caf50", "#2196f3", "#ff9800"];

const UsageBreakdown = () => {
  return (
    <div className="card">
      <h3>💧 Usage Breakdown</h3>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default UsageBreakdown;
