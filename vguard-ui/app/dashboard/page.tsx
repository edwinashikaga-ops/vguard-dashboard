"use client";

import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";

export default function Dashboard() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ WS Connected");
    });

    socket.on("event", (data) => {
      console.log("📡 EVENT:", data);

      setLogs((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("event");
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🔥 VGUARD REALTIME</h1>

      {logs.map((log, i) => (
        <div key={i} style={{
          border: "1px solid #ccc",
          margin: 10,
          padding: 10
        }}>
          <pre>{JSON.stringify(log, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}