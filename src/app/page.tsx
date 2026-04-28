"use client";

import { useState, useEffect } from "react";

const WA_NUMBER = "6282122190885";

const HARGA_MAP: Record<string, { bulanan: string; aktivasi: string; numerik: number; locked: boolean; tier: string }> = {
  "V-LITE":    { bulanan: "Rp 150.000",         aktivasi: "Rp 250.000",    numerik: 150000,  locked: false, tier: "starter"    },
  "V-PRO":     { bulanan: "Rp 450.000",         aktivasi: "Rp 750.000",    numerik: 450000,  locked: false, tier: "business"   },
  "V-ADVANCE": { bulanan: "Rp 1.200.000",       aktivasi: "Rp 3.500.000",  numerik: 1200000, locked: false, tier: "business"   },
  "V-ELITE":   { bulanan: "Mulai Rp 3.500.000", aktivasi: "Rp 10.000.000", numerik: 3500000, locked: true,  tier: "enterprise" },
  "V-ULTRA":   { bulanan: "Custom",             aktivasi: "Konsultasi",    numerik: 0,       locked: true,  tier: "enterprise" },
};

const efficiency: Record<string, number> = {
  "V-LITE": 0.30, "V-PRO": 0.50, "V-ADVANCE": 0.65, "V-ELITE": 0.80, "V-ULTRA": 0.92,
};
const incidentReduction: Record<string, number> = {
  "V-LITE": 0.40, "V-PRO": 0.60, "V-ADVANCE": 0.75, "V-ELITE": 0.88, "V-ULTRA": 0.95,
};

const PRODUCTS = [
  { code: "VG-LITE-001",  name: "VGuard V-LITE",    plan: "V-LITE",    icon: "🔵", desc: "Starter surveillance AI" },
  { code: "VG-PRO-002",   name: "VGuard V-PRO",     plan: "V-PRO",     icon: "🟣", desc: "Professional AI engine" },
  { code: "VG-ADV-003",   name: "VGuard V-ADVANCE", plan: "V-ADVANCE", icon: "🟠", desc: "Advanced analytics suite" },
  { code: "VG-ELT-004",   name: "VGuard V-ELITE",   plan: "V-ELITE",   icon: "🥇", desc: "Enterprise-grade solution" },
  { code: "VG-ULT-005",   name: "VGuard V-ULTRA",   plan: "V-ULTRA",   icon: "⚡", desc: "Custom enterprise deploy" },
];

function formatRp(val: number): string {
  if (val >= 1000000000) return "Rp " + (val / 1000000000).toFixed(1) + " M";
  if (val >= 1000000)    return "Rp " + (val / 1000000).toFixed(1) + " Jt";
  if (val >= 1000)       return "Rp " + (val / 1000).toFixed(0) + " Rb";
  return "Rp " + val.toLocaleString("id-ID");
}

export default function VGuardDashboard() {
  const [plan, setPlan]                 = useState("V-PRO");
  const [humanCost, setHumanCost]       = useState(5000000);
  const [incidentCost, setIncidentCost] = useState(20000000);
  const [annualCost, setAnnualCost]     = useState("");
  const [savings, setSavings]           = useState("");
  const [netBenefit, setNetBenefit]     = useState("");
  const [roiPercent, setRoiPercent]     = useState(0);
  const [barPct, setBarPct]             = useState(0);

  const roiColor = roiPercent >= 300 ? "var(--green)" : roiPercent >= 150 ? "var(--gold)" : "var(--accent)";

  useEffect(() => {
    const monthly = HARGA_MAP[plan].numerik;
    if (monthly === 0) {
      setAnnualCost("Custom"); setSavings("-"); setNetBenefit("-"); setRoiPercent(0); setBarPct(0);
      return;
    }
    const annual       = monthly * 12;
    const humanSavings = humanCost * 12 * efficiency[plan];
    const inciSavings  = incidentCost * incidentReduction[plan];
    const totalSavings = humanSavings + inciSavings;
    const net          = totalSavings - annual;
    const roi          = Math.round((net / annual) * 100);
    setAnnualCost(formatRp(annual));
    setSavings(formatRp(totalSavings));
    setNetBenefit(formatRp(net));
    setRoiPercent(roi);
    setBarPct(Math.min((roi / 400) * 100, 100));
  }, [plan, humanCost, incidentCost]);

  return (
    <>
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        :root {
          --bg:#050A14; --panel:#0B1220; --border:#1A2840;
          --accent:#00E5FF; --accent2:#7B2FFF; --accent3:#FF6B35;
          --text:#E8F4FF; --muted:#4A6080; --green:#00FF88; --red:#FF4455; --gold:#FFD700;
        }
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html, body { background:var(--bg); color:var(--text); font-family:'Syne',sans-serif; min-height:100vh; overflow-x:hidden; }
        body::before {
          content:''; position:fixed; inset:0;
          background-image: linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px);
          background-size:40px 40px; pointer-events:none; z-index:0;
        }
        @keyframes pulse    { 0%,100%{box-shadow:0 0 0 0 rgba(0,229,255,0.2)} 50%{box-shadow:0 0 0 6px rgba(0,229,255,0)} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes fadeIn   { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .orb { position:fixed; border-radius:50%; filter:blur(120px); pointer-events:none; z-index:0; }
        .orb1 { width:400px; height:400px; background:rgba(0,229,255,0.06); top:-100px; right:-100px; }
        .orb2 { width:300px; height:300px; background:rgba(123,47,255,0.08); bottom:100px; left:-50px; }
        .container { position:relative; z-index:1; max-width:1280px; margin:0 auto; padding:0 24px 60px; }
        header { display:flex; align-items:center; justify-content:space-between; padding:28px 0 40px; border-bottom:1px solid var(--border); margin-bottom:40px; }
        .logo { display:flex; align-items:center; gap:14px; }
        .logo-icon { width:44px; height:44px; background:linear-gradient(135deg,var(--accent),var(--accent2)); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:20px; box-shadow:0 0 20px rgba(0,229,255,0.3); }
        .logo-text { font-size:22px; font-weight:800; letter-spacing:-0.5px; }
        .logo-text span { color:var(--accent); }
        .badge { background:rgba(0,229,255,0.1); border:1px solid rgba(0,229,255,0.3); color:var(--accent); font-family:'Space Mono',monospace; font-size:11px; padding:6px 14px; border-radius:20px; letter-spacing:1px; animation:pulse 2s infinite; }
        .stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:36px; }
        .stat-card { background:var(--panel); border:1px solid var(--border); border-radius:14px; padding:22px 24px; position:relative; overflow:hidden; transition:transform 0.2s,border-color 0.2s; }
        .stat-card:hover { transform:translateY(-2px); border-color:var(--accent); }
        .stat-card::after { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--accent),var(--accent2)); }
        .stat-label { font-size:11px; font-family:'Space Mono',monospace; color:var(--muted); letter-spacing:1px; text-transform:uppercase; margin-bottom:10px; }
        .stat-value { font-size:28px; font-weight:800; color:var(--text); line-height:1; }
        .stat-value.green { color:var(--green); } .stat-value.cyan { color:var(--accent); } .stat-value.gold { color:var(--gold); }
        .stat-sub { font-size:12px; color:var(--muted); margin-top:6px; }
        .main-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:24px; }
        .panel { background:var(--panel); border:1px solid var(--border); border-radius:16px; overflow:hidden; }
        .panel-header { padding:18px 24px; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; }
        .panel-title { font-size:13px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; display:flex; align-items:center; gap:8px; }
        .dot { width:8px; height:8px; border-radius:50%; background:var(--green); box-shadow:0 0 8px var(--green); animation:blink 1.5s infinite; }
        .product-table { width:100%; border-collapse:collapse; }
        .product-table thead tr { border-bottom:1px solid var(--border); }
        .product-table th { font-family:'Space Mono',monospace; font-size:10px; color:var(--muted); letter-spacing:1px; text-transform:uppercase; padding:10px 12px; text-align:left; }
        .product-table td { padding:11px 12px; font-size:13px; border-bottom:1px solid rgba(26,40,64,0.5); vertical-align:middle; }
        .product-table tr:last-child td { border-bottom:none; }
        .product-table tr:hover td { background:rgba(0,229,255,0.03); }
        .dim-cell { opacity:0.55; }
        .code-pill { font-family:'Space Mono',monospace; font-size:10px; background:rgba(0,229,255,0.1); border:1px solid rgba(0,229,255,0.25); color:var(--accent); padding:3px 8px; border-radius:6px; display:inline-block; }
        .tier-badge { font-size:10px; font-weight:700; padding:3px 10px; border-radius:20px; letter-spacing:0.5px; text-transform:uppercase; }
        .tier-enterprise { background:rgba(255,215,0,0.12); color:var(--gold); border:1px solid rgba(255,215,0,0.3); }
        .tier-business   { background:rgba(123,47,255,0.12); color:#A78BFF; border:1px solid rgba(123,47,255,0.3); }
        .tier-starter    { background:rgba(0,255,136,0.1); color:var(--green); border:1px solid rgba(0,255,136,0.3); }
        .preorder-btn { display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:700; padding:5px 12px; border-radius:8px; background:#25D366; color:#fff; text-decoration:none; font-family:'Syne',sans-serif; transition:opacity 0.2s; white-space:nowrap; }
        .preorder-btn:hover { opacity:0.85; }
        .module-card { background:rgba(26,40,64,0.5); border:1px solid var(--border); border-radius:12px; padding:16px 18px; position:relative; overflow:hidden; transition:all 0.2s; cursor:default; display:flex; align-items:center; gap:14px; }
        .module-card:hover { border-color:var(--accent2); background:rgba(123,47,255,0.08); }
        .module-name { font-size:13px; font-weight:700; margin-bottom:4px; }
        .module-code { font-family:'Space Mono',monospace; font-size:10px; color:var(--accent2); letter-spacing:0.5px; margin-bottom:6px; }
        .module-desc { font-size:11px; color:var(--muted); line-height:1.5; }
        .module-status { position:absolute; top:14px; right:14px; width:8px; height:8px; border-radius:50%; }
        .roi-section { grid-column:span 2; }
        .roi-grid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:20px; padding:24px; }
        .input-group { display:flex; flex-direction:column; gap:8px; }
        .input-label { font-size:11px; font-family:'Space Mono',monospace; color:var(--muted); letter-spacing:0.5px; text-transform:uppercase; }
        .input-field { background:rgba(0,229,255,0.04); border:1px solid var(--border); border-radius:10px; padding:12px 16px; color:var(--text); font-family:'Space Mono',monospace; font-size:14px; outline:none; transition:border-color 0.2s; width:100%; }
        .input-field:focus { border-color:var(--accent); }
        select.input-field option { background:#0B1220; }
        .roi-results { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; padding:0 24px 24px; }
        .roi-card { background:rgba(0,229,255,0.04); border:1px solid rgba(0,229,255,0.15); border-radius:12px; padding:18px; text-align:center; animation:fadeIn 0.4s ease; }
        .roi-card.highlight { background:rgba(0,255,136,0.06); border-color:rgba(0,255,136,0.3); }
        .roi-card-label { font-size:10px; font-family:'Space Mono',monospace; color:var(--muted); letter-spacing:1px; text-transform:uppercase; margin-bottom:8px; }
        .roi-card-value { font-size:22px; font-weight:800; color:var(--accent); }
        .roi-bar-section { padding:0 24px 24px; }
        .roi-bar-label { font-size:11px; font-family:'Space Mono',monospace; color:var(--muted); margin-bottom:10px; letter-spacing:0.5px; text-transform:uppercase; }
        .bar-track { height:10px; background:var(--border); border-radius:10px; overflow:hidden; margin-bottom:6px; }
        .bar-fill { height:100%; border-radius:10px; background:linear-gradient(90deg,var(--accent),var(--green)); transition:width 0.6s cubic-bezier(0.4,0,0.2,1); box-shadow:0 0 10px rgba(0,229,255,0.4); }
        .bar-labels { display:flex; justify-content:space-between; font-family:'Space Mono',monospace; font-size:10px; color:var(--muted); }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:var(--bg); }
        ::-webkit-scrollbar-thumb { background:var(--border); border-radius:3px; }
        @media(max-width:900px) {
          .stats-grid { grid-template-columns:repeat(2,1fr); }
          .main-grid { grid-template-columns:1fr; }
          .roi-section { grid-column:span 1; }
          .roi-grid { grid-template-columns:1fr 1fr; }
          .roi-results { grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:560px) {
          .roi-grid { grid-template-columns:1fr; }
          .roi-results { grid-template-columns:1fr 1fr; }
          .stats-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      {/* ── BACKGROUND ORBS ── */}
      <div className="orb orb1" />
      <div className="orb orb2" />

      <div className="container">

        {/* ── HEADER ── */}
        <header>
          <div className="logo">
            <div className="logo-icon">🛡️</div>
            <div>
              <div className="logo-text">V<span>GUARD</span> AI</div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono',monospace" }}>
                Product & ROI Dashboard
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href="#kontak"
              style={{
                fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--accent)",
                textDecoration: "none", border: "1px solid rgba(0,229,255,0.3)",
                borderRadius: 20, padding: "6px 16px", background: "rgba(0,229,255,0.05)",
              }}
            >
              📞 Kontak
            </a>
            <div className="badge">● LIVE SYSTEM</div>
          </div>
        </header>

        {/* ── STATS GRID ── */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Total Paket</div>
            <div className="stat-value cyan">5</div>
            <div className="stat-sub">Lite · Pro · Advance · Elite · Ultra</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Mulai Dari</div>
            <div className="stat-value green">150rb</div>
            <div className="stat-sub">Paket V-LITE /bulan</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Pre-Order</div>
            <div className="stat-value gold">2 Tier</div>
            <div className="stat-sub">V-ELITE & V-ULTRA terkunci</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Uptime SLA</div>
            <div className="stat-value cyan">99.97%</div>
            <div className="stat-sub">Garansi Enterprise</div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="main-grid">

          {/* PRODUCT TABLE — ✅ id="harga" ditambahkan */}
          <div className="panel" id="harga">
            <div className="panel-header">
              <div className="panel-title">
                <div className="dot" />
                Daftar Harga Produk VGuard AI
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono',monospace" }}>v2.4.1</div>
            </div>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Paket</th>
                  <th>Biaya Bulanan</th>
                  <th>Biaya Aktivasi</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p) => {
                  const h = HARGA_MAP[p.plan];
                  return (
                    <tr key={p.code}>
                      <td className={h.locked ? "dim-cell" : ""}>
                        <span className="code-pill">{p.code}</span>
                      </td>
                      <td className={h.locked ? "dim-cell" : ""}>
                        <div style={{ fontWeight: 700 }}>{p.icon} {p.plan}</div>
                        <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 2 }}>{p.desc}</div>
                      </td>
                      <td
                        className={h.locked ? "dim-cell" : ""}
                        style={{ fontWeight: 700, color: "var(--accent)", fontFamily: "'Space Mono',monospace", fontSize: 12 }}
                      >
                        {h.bulanan}
                      </td>
                      <td
                        className={h.locked ? "dim-cell" : ""}
                        style={{ fontWeight: 700, color: "var(--text)", fontFamily: "'Space Mono',monospace", fontSize: 12 }}
                      >
                        {h.aktivasi}
                      </td>
                      <td>
                        {h.locked ? (
                          <a
                            href={`https://wa.me/${WA_NUMBER}?text=Halo%20VGuard%2C%20saya%20ingin%20Pre-Order%20${p.plan}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="preorder-btn"
                          >
                            🔒 Pre-Order
                          </a>
                        ) : (
                          <span className={`tier-badge tier-${h.tier}`}>{h.tier}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div style={{
              margin: "12px 16px 16px", padding: "12px 16px",
              background: "rgba(255,107,53,0.07)", border: "1px solid rgba(255,107,53,0.25)",
              borderRadius: 10, display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ fontSize: 18 }}>🔒</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent3)" }}>
                  V-ELITE & V-ULTRA — Pre-Order Only
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>
                  Klik tombol Pre-Order untuk reservasi langsung via WhatsApp. Slot terbatas!
                </div>
              </div>
            </div>
          </div>

          {/* MODULES */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <div className="dot" style={{ background: "var(--accent2)", boxShadow: "0 0 8px var(--accent2)" }} />
                Modul AI VGuard
              </div>
            </div>
            <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "🎯", name: "Threat Detection Engine", code: "MOD-TDE-V2 · V-PRO / V-ADVANCE+",   desc: "Deteksi ancaman real-time dengan akurasi 98.7% menggunakan deep learning.",    sc: "var(--green)" },
                { icon: "👁️", name: "Face Recognition AI",     code: "MOD-FRA-V3 · V-ADVANCE / V-ELITE+", desc: "Identifikasi wajah dalam kondisi pencahayaan rendah & sudut ekstrem.",        sc: "var(--green)" },
                { icon: "📊", name: "Behavior Analytics",      code: "MOD-BAX-V1 · V-ADVANCE+",           desc: "Analisis pola perilaku anomali & prediksi insiden keamanan.",                 sc: "var(--gold)"  },
                { icon: "🔗", name: "API Integration Layer",   code: "MOD-AIL-V2 · V-ELITE / V-ULTRA",    desc: "Koneksi ke 200+ sistem eksternal — ERP, HRMS, IoT sensors.",                 sc: "var(--green)" },
                { icon: "☁️", name: "Cloud Command Center",    code: "MOD-CCC-V4 · V-ULTRA",              desc: "Dashboard terpusat multi-site dengan enkripsi end-to-end AES-256.",           sc: "var(--green)" },
              ].map((m) => (
                <div key={m.code} className="module-card">
                  <div style={{ fontSize: 26 }}>{m.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div className="module-name">{m.name}</div>
                    <div className="module-code">{m.code}</div>
                    <div className="module-desc">{m.desc}</div>
                  </div>
                  <div className="module-status" style={{ background: m.sc, boxShadow: `0 0 6px ${m.sc}` }} />
                </div>
              ))}
            </div>
          </div>

          {/* ROI CALCULATOR — ✅ id="roi" ditambahkan */}
          <div className="panel roi-section" id="roi">
            <div className="panel-header">
              <div className="panel-title">
                <div className="dot" style={{ background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }} />
                Kalkulator ROI VGuard AI
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono',monospace" }}>
                Simulasi investasi otomatis
              </div>
            </div>

            <div className="roi-grid">
              <div className="input-group">
                <label className="input-label">Pilih Paket</label>
                <select className="input-field" value={plan} onChange={(e) => setPlan(e.target.value)}>
                  <option value="V-LITE">V-LITE — Rp 150.000/bln</option>
                  <option value="V-PRO">V-PRO — Rp 450.000/bln</option>
                  <option value="V-ADVANCE">V-ADVANCE — Rp 1.200.000/bln</option>
                  <option value="V-ELITE">V-ELITE — Mulai Rp 3.500.000/bln</option>
                  <option value="V-ULTRA">V-ULTRA — Custom</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Biaya SDM Saat Ini (Rp/bln)</label>
                <input
                  className="input-field"
                  type="number"
                  value={humanCost}
                  step={500000}
                  onChange={(e) => setHumanCost(parseFloat(e.target.value) || 0)}
                />
              </div>
              <div className="input-group">
                <label className="input-label">Kerugian Insiden/Thn (Rp)</label>
                <input
                  className="input-field"
                  type="number"
                  value={incidentCost}
                  step={1000000}
                  onChange={(e) => setIncidentCost(parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>

            {HARGA_MAP[plan].numerik === 0 ? (
              <div style={{ padding: "20px 24px 28px", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>⚡</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "var(--accent3)", marginBottom: 8 }}>
                  V-ULTRA — Harga Custom
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 20 }}>
                  ROI dihitung berdasarkan kebutuhan spesifik enterprise kamu.
                </div>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Halo%20VGuard%2C%20saya%20ingin%20konsultasi%20paket%20V-ULTRA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#25D366", color: "#fff", padding: "12px 28px",
                    borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none",
                  }}
                >
                  📱 Konsultasi via WhatsApp
                </a>
              </div>
            ) : (
              <>
                <div className="roi-results">
                  <div className="roi-card">
                    <div className="roi-card-label">Investasi/Tahun</div>
                    <div className="roi-card-value">{annualCost}</div>
                  </div>
                  <div className="roi-card">
                    <div className="roi-card-label">Penghematan/Tahun</div>
                    <div className="roi-card-value">{savings}</div>
                  </div>
                  <div className="roi-card">
                    <div className="roi-card-label">Net Benefit</div>
                    <div className="roi-card-value">{netBenefit}</div>
                  </div>
                  <div className="roi-card highlight">
                    <div className="roi-card-label">ROI</div>
                    <div className="roi-card-value" style={{ color: roiColor }}>{roiPercent}%</div>
                  </div>
                </div>
                <div className="roi-bar-section">
                  <div className="roi-bar-label">ROI Index (Target: ≥ 200%)</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${barPct}%` }} />
                  </div>
                  <div className="bar-labels">
                    <span>0%</span>
                    <span>{roiPercent}% / 400%</span>
                    <span>400%+</span>
                  </div>
                </div>
              </>
            )}
          </div>

        </div>{/* END main-grid */}

        {/* ── KONTAK ── */}
        <section id="kontak" style={{ marginTop: 40, marginBottom: 16 }}>
          <div className="panel" style={{ maxWidth: 700, margin: "0 auto" }}>
            <div className="panel-header">
              <div className="panel-title">
                <div className="dot" style={{ background: "var(--accent3)", boxShadow: "0 0 8px var(--accent3)" }} />
                Hubungi Kami
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono',monospace" }}>
                VGuard AI Support
              </div>
            </div>
            <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Sales */}
              <div style={{
                background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.2)",
                borderRadius: 14, padding: "20px 24px",
                display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, fontSize: 22,
                    background: "linear-gradient(135deg,var(--accent),var(--accent2))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 0 16px rgba(0,229,255,0.25)",
                  }}>💬</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Sales & Konsultasi</div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 13, color: "var(--accent)" }}>
                      +62 821-2219-0885
                    </div>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>
                      Senin – Jumat · 08.00 – 17.00 WIB
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Halo%20VGuard%2C%20saya%20ingin%20konsultasi%20produk`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      background: "#25D366", borderRadius: 10, color: "#fff",
                      fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13,
                      padding: "10px 20px", textDecoration: "none",
                      display: "inline-flex", alignItems: "center", gap: 6,
                    }}
                  >
                    📱 WhatsApp
                  </a>
                  <a
                    href={`tel:+${WA_NUMBER}`}
                    style={{
                      background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)",
                      borderRadius: 10, color: "var(--accent)", fontFamily: "'Syne',sans-serif",
                      fontWeight: 700, fontSize: 13, padding: "10px 20px", textDecoration: "none",
                      display: "inline-flex", alignItems: "center", gap: 6,
                    }}
                  >
                    📞 Telepon
                  </a>
                </div>
              </div>

              {/* Pre-order */}
              <div style={{
                background: "rgba(255,107,53,0.06)", border: "1px solid rgba(255,107,53,0.25)",
                borderRadius: 14, padding: "20px 24px",
                display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, fontSize: 22,
                    background: "linear-gradient(135deg,var(--accent3),var(--accent2))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 0 16px rgba(255,107,53,0.25)",
                  }}>🔒</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Pre-Order V-ELITE & V-ULTRA</div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 13, color: "var(--accent3)" }}>
                      +62 821-2219-0885
                    </div>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>
                      Reservasi sekarang — slot terbatas
                    </div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Halo%20VGuard%2C%20saya%20ingin%20Pre-Order%20V-ELITE%20atau%20V-ULTRA`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    background: "#25D366", borderRadius: 10, color: "#fff",
                    fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13,
                    padding: "10px 20px", textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: 6,
                  }}
                >
                  📱 Pre-Order via WA
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div style={{
          textAlign: "center", color: "var(--muted)",
          fontFamily: "'Space Mono',monospace", fontSize: 11, paddingTop: 10,
        }}>
          VGuard AI © {new Date().getFullYear()} · All Rights Reserved · Built with Elite AI Squad
        </div>

      </div>{/* END container */}
    </>
  );
}
