import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Beranda", path: "/", icon: "🏠" },
    { name: "Daftar Harga", path: "/pricing", icon: "💰" },
    { name: "ROI Calculator", path: "/roi", icon: "📊" },
    { name: "Portal Klien", path: "/portal", icon: "🔑" },
    { name: "Admin", path: "/admin", icon: "🛡️" },
  ];

  return (
    <div style={{
      width: "250px",
      background: "#020617",
      color: "white",
      padding: "20px",
      borderRight: "1px solid #1e293b",
      height: "100vh",
      position: "sticky",
      top: 0
    }}>
      <h2 style={{ color: "#00d4ff", marginBottom: "30px" }}>🛡️ V-GUARD</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              textDecoration: "none",
              color: location.pathname === item.path ? "#00d4ff" : "white",
              padding: "12px 15px",
              borderRadius: "8px",
              background: location.pathname === item.path ? "#1e293b" : "transparent",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "0.3s"
            }}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: "auto", paddingTop: "40px", fontSize: "12px", color: "#475569" }}>
        © 2026 V-Guard System
      </div>
    </div>
  );
}
