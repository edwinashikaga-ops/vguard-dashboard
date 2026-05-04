import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/home";
import Harga from "./pages/harga";
import ROICalculator from "./pages/roi";
import Portal from "./pages/portal";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔐 LOGIN (tanpa layout) */}
        <Route path="/login" element={<Login />} />

        {/* 🏠 MAIN APP DENGAN LAYOUT */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Harga />} />
          <Route path="roi" element={<ROICalculator />} />
          <Route path="portal" element={<Portal />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
