import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [rawLogs, setRawLogs] = useState([]);

  useEffect(() => {
    // 🔥 CONNECT SOCKET
    const socket = io("http://localhost:3000");

    // 🔥 EVENT REALTIME MASUK
    socket.on("event", (data) => {
      // simpan raw logs (maks 20)
      setRawLogs((prev) => [data, ...prev].slice(0, 20));

      // update chart
      setLogs((prev) => [
        ...prev,
        {
          name: new Date(data.time).toLocaleTimeString(),
          amount: data.amount || 0
        }
      ]);
    });

    return () => socket.disconnect();
  }, []);

  // =============================
  // 🔥 CALCULATION
  // =============================

  // total uang
  const total = rawLogs.reduce((a, b) => a + (b.amount || 0), 0);

  // fraud detection
  const alerts = rawLogs.filter(
    (l) => l.type === "void" && l.amount >= 50000
  );

  // AI score
  const score = Math.max(100 - alerts.length * 5, 50);

  // =============================
  // 🎨 UI
  // =============================

  return (
    <div style={{ padding: 20, color: "white" }}>
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>V-Guard: Digitizing Trust, Eliminating Leakage</h2>
        <p style={{ color: "#94a3b8", marginTop: "5px" }}>Sistem pemantauan bisnis Anda berjalan normal.</p>
      </div>

      {/* =============================
          TOP CARDS
      ============================== */}
      <div style={{ display: "flex", gap: 20 }}>
        <div className="card">
          💰 Rp {total.toLocaleString()}
        </div>

        <div className="card">
          📊 {rawLogs.length} Transaksi
        </div>

        <div className="card">
          🚨 {alerts.length} Fraud
        </div>
      </div>

      {/* =============================
          CHART
      ============================== */}
      <div className="card" style={{ marginTop: 20 }}>
        <h3>📊 Grafik Aktivitas</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={logs.length ? logs : [{ name: "0", amount: 0 }]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#00d4ff"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* =============================
          AI SCORE
      ============================== */}
      <div
        className="card"
        style={{ marginTop: 20, textAlign: "center" }}
      >
        <h3>🧠 AI Score</h3>

        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "10px solid #22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            fontSize: 24
          }}
        >
          {score}%
        </div>

        <p>
          {score > 80
            ? "✅ System Good"
            : "⚠️ Perlu perhatian"}
        </p>
      </div>

      {/* =============================
          AI ALERTS
      ============================== */}
      <div className="card" style={{ marginTop: 20 }}>
        <h3>🚨 AI Alerts</h3>

        {alerts.length === 0 ? (
          <p>✅ Tidak ada fraud</p>
        ) : (
          alerts.map((a, i) => (
            <p key={i}>
              ⚠️ {a.store} | {a.cashier} | Rp {a.amount}
            </p>
          ))
        )}
      </div>

    </div>
  );
}