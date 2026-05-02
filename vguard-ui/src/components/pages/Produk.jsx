export default function Produk() {
  return (
    <div style={{
      background: "#020617",
      color: "white",
      minHeight: "100vh",
      padding: "40px"
    }}>
      <h1>🚀 Produk V-GUARD AI</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        
        <div className="card">
          <h2>🟢 V-LITE</h2>
          <p>Deteksi VOID & Fraud dasar</p>
          <button>Buka</button>
        </div>

        <div className="card">
          <h2>🟡 V-PRO</h2>
          <p>Forensik keuangan + API POS</p>
          <button>Buka</button>
        </div>

        <div className="card">
          <h2>🔵 V-SIGHT</h2>
          <p>AI CCTV Monitoring</p>
          <button>Buka</button>
        </div>

        <div className="card">
          <h2>🔴 V-ENTERPRISE</h2>
          <p>Multi cabang & kontrol pusat</p>
          <button>Buka</button>
        </div>

        <div className="card">
          <h2>🟣 V-ULTRA</h2>
          <p>Neural AI + White Label</p>
          <button>Buka</button>
        </div>

      </div>
    </div>
  );
}