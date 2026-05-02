export default function Harga() {
  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Paket Harga</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div className="card">V-LITE - Rp 499K</div>
        <div className="card">V-PRO - Rp 1.5JT</div>
        <div className="card">V-ULTRA - Rp 5JT</div>
      </div>
    </div>
  );
}