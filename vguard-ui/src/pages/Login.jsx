import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (user === "admin" && pass === "admin123") {
      localStorage.setItem("role", "admin");
      window.location.href = "/dashboard";
    } else {
      localStorage.setItem("role", "client");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Login</h1>

      <input placeholder="User"
        onChange={e => setUser(e.target.value)} /><br/>

      <input type="password" placeholder="Password"
        onChange={e => setPass(e.target.value)} /><br/>

      <button onClick={login}>Login</button>
    </div>
  );
}