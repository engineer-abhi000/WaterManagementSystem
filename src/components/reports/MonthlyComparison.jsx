import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", usage: 3800 },
  { month: "Feb", usage: 4100 },
  { month: "Mar", usage: 4200 }
];

const MonthlyComparison = () => {
  return (
    <div className="card">
      <h3>📊 Monthly Usage Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="usage" fill="#2196f3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyComparison;
