export default function Modules() {
  const items = [
    { name: "V-LITE", color: "#22c55e" },
    { name: "V-PRO", color: "#eab308" },
    { name: "V-SIGHT", color: "#3b82f6" },
    { name: "V-ENTERPRISE", color: "#ef4444" },
    { name: "V-ULTRA", color: "#a855f7" },
  ];

  return (
    <div className="card">
      <h3>Pilih Modul</h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
        gap: "15px",
        marginTop: "20px"
      }}>
        {items.map((m, i) => (
          <div key={i} style={{
            background: "#0f172a",
            padding: "15px",
            borderRadius: "10px",
            border: `1px solid ${m.color}`
          }}>
            <h4 style={{ color: m.color }}>{m.name}</h4>
            <button>Buka</button>
          </div>
        ))}
      </div>
    </div>
  );
}