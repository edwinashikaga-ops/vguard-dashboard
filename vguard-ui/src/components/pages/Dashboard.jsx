import { useEffect, useState } from "react";

export default function Dashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:3000/logs");
      const data = await res.json();
      setLogs(data);
    };

    load();
    setInterval(load, 3000);
  }, []);

  return (
    <div>
      {/* CARD */}
      <div style={{
        display: "flex",
        gap: "20px"
      }}>
        <div className="card">💰 Rp 2.4M</div>
        <div className="card">📊 1,284</div>
        <div className="card">🚨 42 Fraud</div>
      </div>

      {/* LOG */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>📡 Live Logs</h3>

        {logs.map((l, i) => (
          <p key={i}>
            {l.store} - {l.cashier} - Rp {l.amount}
          </p>
        ))}
      </div>

      {/* AI ALERT */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>🚨 AI Alerts</h3>
        <p>Void mencurigakan terdeteksi</p>
      </div>
    </div>
  );
}