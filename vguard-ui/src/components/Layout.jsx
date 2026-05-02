import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <div style={{
          padding: "20px",
          background: "#020617",
          minHeight: "100vh"
        }}>
          {/* 🔥 INI KUNCI NYA */}
          <Outlet />
        </div>
      </div>

    </div>
  );
}