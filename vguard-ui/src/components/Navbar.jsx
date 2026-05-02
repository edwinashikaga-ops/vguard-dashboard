import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      background: "#020617",
      borderBottom: "1px solid #1e293b"
    }}>
      
      {/* LOGO */}
      <h2 style={{ color: "#00d4ff" }}>🛡️ V-GUARD</h2>

      {/* MENU */}
      <div style={{
        display: "flex",
        gap: "30px"
      }}>
        <Link style={linkStyle} to="/">Beranda</Link>
        <Link style={linkStyle} to="/produk">Produk</Link>
        <Link style={linkStyle} to="/harga">Harga</Link>
        <Link style={linkStyle} to="/portal">Portal Klien</Link>
        <Link style={linkStyle} to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500"
};