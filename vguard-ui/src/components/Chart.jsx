import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function Chart({ data }) {
  return (
    <div className="card">
      <h3>📈 Realtime Activity</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line dataKey="amount" stroke="#22c55e" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}