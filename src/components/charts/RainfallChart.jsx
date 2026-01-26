import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", rain: 20 },
  { month: "Feb", rain: 35 },
  { month: "Mar", rain: 50 },
];

const RainfallChart = () => (
  <BarChart width={400} height={250} data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="rain" />
  </BarChart>
);

export default RainfallChart;
