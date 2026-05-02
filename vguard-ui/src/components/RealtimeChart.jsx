import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RealtimeChart({ data }) {
  return (
    <div className="card" style={{ height: 300 }}>
      <h3>📊 Grafik Aktivitas</h3>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#00d4ff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}