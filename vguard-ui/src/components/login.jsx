import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({});
  const [role, setRole] = useState("");

  const login = () => {
    if (user.username === "admin" && user.password === "123") {
      setRole("admin");
      alert("Login Admin");
    } else {
      setRole("client");
      alert("Login Client");
    }
  };

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Login</h1>

      <input placeholder="Username"
        onChange={e => setUser({ ...user, username: e.target.value })} /><br/>

      <input placeholder="Password" type="password"
        onChange={e => setUser({ ...user, password: e.target.value })} /><br/>

      <button onClick={login}>Login</button>

      <p>Role: {role}</p>
    </div>
  );
}