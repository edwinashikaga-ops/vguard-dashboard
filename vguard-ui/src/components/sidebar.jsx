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
      padding: "25px 20px",
      borderRight: "1px solid #1e293b",
      height: "100vh",
      position: "sticky",
      top: 0
    }}>
      <h2 style={{ color: "#00d4ff", marginBottom: "30px", paddingLeft: "15px" }}>🛡️ V-Guard</h2>

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
              gap: "15px",
              transition: "0.3s"
            }}
          >
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px" }}>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      <div 
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
        style={{ 
          marginTop: "auto", 
          padding: "15px", 
          fontSize: "12px", 
          color: "#94a3b8",
          background: "#1e293b",
          borderRadius: "8px",
          cursor: "pointer",
          border: "1px solid #334155",
          transition: "0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.background = "#334155"}
        onMouseOut={(e) => e.currentTarget.style.background = "#1e293b"}
      >
        <div style={{ fontWeight: "bold", color: "#00d4ff", marginBottom: "4px" }}>
          Digitizing Trust, Eliminating Leakage
        </div>
        <div style={{ fontSize: "10px", color: "#475569" }}>
          Klik untuk Logout
        </div>
      </div>
    </div>
  );
}
