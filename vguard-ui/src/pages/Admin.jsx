import { useEffect, useState } from "react";

export default function Admin() {
  const [clients, setClients] = useState([]);

  const load = async () => {
    const res = await fetch("http://localhost:3000/clients");
    const data = await res.json();
    setClients(data);
  };

  useEffect(() => {
    load();
  }, []);

  // 🔥 APPROVE
  const approve = async (phone) => {
    await fetch("http://localhost:3000/approve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone })
    });

    load();
  };

  // 🔥 PAY
  const pay = async (phone) => {
    await fetch("http://localhost:3000/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone })
    });

    load();
  };

  return (
    <div style={{ color: "white", padding: 20 }}>
      <h1>🛠 Admin Panel</h1>

      {clients.map((c, i) => (
        <div key={i} style={{
          background: "#0f172a",
          padding: 15,
          marginTop: 10,
          borderRadius: 10
        }}>
          <p><b>{c.name}</b> ({c.phone})</p>
          <p>Plan: {c.plan}</p>
          <p>Status: {c.status}</p>

          {c.invoice && (
            <p>
              💳 Rp {c.invoice.amount} - {c.invoice.status}
            </p>
          )}

          {/* BUTTON */}
          {c.status === "pending" && (
            <button onClick={() => approve(c.phone)}>
              Approve
            </button>
          )}

          {c.invoice && c.invoice.status === "unpaid" && (
            <button onClick={() => pay(c.phone)}>
              Mark as Paid
            </button>
          )}

          {c.active && <p>✅ Active</p>}
        </div>
      ))}
    </div>
  );
}