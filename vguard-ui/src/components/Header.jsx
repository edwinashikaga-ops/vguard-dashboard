import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [lang, setLang] = useState("ID");
  const location = useLocation();
  
  const getTitle = () => {
    switch(location.pathname) {
      case "/": return "Beranda";
      case "/pricing": return "Daftar Harga";
      case "/roi": return "ROI Calculator";
      case "/portal": return "Portal Klien";
      case "/admin": return "Admin Panel";
      default: return "V-Guard System";
    }
  };

  return (
    <div style={{
      height: "70px",
      background: "#020617",
      borderBottom: "1px solid #1e293b",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      color: "white"
    }}>
      <h3 style={{ color: "#94a3b8" }}>{getTitle()}</h3>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div style={{ 
          display: "flex", 
          background: "#1e293b", 
          borderRadius: "20px", 
          padding: "4px" 
        }}>
          <button 
            onClick={() => setLang("ID")}
            style={{
              padding: "4px 12px",
              borderRadius: "16px",
              border: "none",
              background: lang === "ID" ? "#00d4ff" : "transparent",
              color: lang === "ID" ? "#020617" : "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "12px"
            }}
          >ID</button>
          <button 
            onClick={() => setLang("EN")}
            style={{
              padding: "4px 12px",
              borderRadius: "16px",
              border: "none",
              background: lang === "EN" ? "#00d4ff" : "transparent",
              color: lang === "EN" ? "#020617" : "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "12px"
            }}
          >EN</button>
        </div>
        <span style={{ fontSize: "14px", color: "#94a3b8" }}>👤 Admin</span>
      </div>
    </div>
  );
}
