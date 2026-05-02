import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState("ID");

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
      <h3>Dashboard</h3>

      <div>
        <button onClick={() => setLang("ID")}>ID</button>
        <button onClick={() => setLang("EN")}>EN</button>
        &nbsp;&nbsp;👤 Admin
      </div>
    </div>
  );
}