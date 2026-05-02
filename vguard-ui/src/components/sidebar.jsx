export default function Sidebar() {
  return (
    <div style={{
      width: "250px",
      background: "#020617",
      color: "white",
      padding: "20px",
      borderRight: "1px solid #1e293b",
      height: "100vh"
    }}>
      <h2 style={{ color: "#00d4ff" }}>🛡️ V-GUARD</h2>

      <p style={{ marginTop: "20px", color: "#94a3b8" }}>
        Lindungi bisnis Anda
      </p>

      <div style={{ marginTop: "40px" }}>
        <p>🏠 Dashboard</p>
        <p>🟢 V-LITE</p>
        <p>🟡 V-PRO</p>
        <p>🔵 V-SIGHT</p>
        <p>🔴 Enterprise</p>
        <p>🟣 ULTRA</p>
      </div>
    </div>
  );
}