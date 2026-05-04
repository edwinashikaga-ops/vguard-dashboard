import React from 'react';

export default function Harga() {
  const tiers = [
    {
      name: "V-LITE",
      price: "Rp 499K",
      period: "/bulan",
      features: ["Monitoring Dasar", "1 Kamera", "Penyimpanan 7 Hari"],
      color: "#94a3b8"
    },
    {
      name: "V-PRO",
      price: "Rp 1.5JT",
      period: "/bulan",
      features: ["Monitoring Lanjutan", "Up to 4 Kamera", "Deteksi Anomali Kasir", "Penyimpanan 30 Hari"],
      color: "#00d4ff"
    },
    {
      name: "V-ULTRA",
      price: "Rp 5JT",
      period: "/bulan",
      features: ["Full Forensic Analysis", "Unlimited Kamera", "Integrasi POS Real-time", "Prioritas Support 24/7"],
      color: "#a855f7"
    }
  ];

  return (
    <div style={{ color: 'white' }}>
      <h2 style={{ color: '#00d4ff', marginBottom: '10px' }}>💰 Daftar Tier Produk</h2>
      <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Pilih paket yang sesuai dengan skala bisnis Anda.</p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '30px' 
      }}>
        {tiers.map((tier) => (
          <div key={tier.name} style={{
            background: '#1e293b',
            padding: '40px 30px',
            borderRadius: '16px',
            border: `1px solid ${tier.color}44`,
            textAlign: 'center',
            transition: '0.3s',
            cursor: 'default'
          }}>
            <h3 style={{ color: tier.color, fontSize: '24px', marginBottom: '10px' }}>{tier.name}</h3>
            <div style={{ marginBottom: '25px' }}>
              <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{tier.price}</span>
              <span style={{ color: '#94a3b8' }}>{tier.period}</span>
            </div>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              textAlign: 'left', 
              marginBottom: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {tier.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: tier.color }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              background: tier.color,
              color: '#020617',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
