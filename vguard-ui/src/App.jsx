import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 LOGIN (tanpa layout) */}
        <Route path="/login" element={<Login />} />

        {/* 🏠 MAIN APP */}
        <Route path="/" element={<Layout />}>

          {/* dashboard */}
          <Route index element={<Dashboard />} />

          {/* register */}
          <Route path="register" element={<Register />} />

          {/* admin panel */}
          <Route path="admin" element={<Admin />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}