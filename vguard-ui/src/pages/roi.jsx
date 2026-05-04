import React, { useState } from 'react';

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(100000000); // Default 100jt
  const [leakageRate, setLeakageRate] = useState(5); // Default 5%

  const leakageAmount = (revenue * leakageRate) / 100;
  const potentialSavings = leakageAmount * 0.7; // Asumsi V-Guard bisa menghemat 70% dari kebocoran

  return (
    <div style={{ color: 'white', maxWidth: '800px' }}>
      <h2 style={{ color: '#00d4ff', marginBottom: '20px' }}>📊 ROI Calculator</h2>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>
        Simulasi potensi penghematan dan deteksi kebocoran operasional bisnis Anda.
      </p>

      <div style={{ 
        background: '#1e293b', 
        padding: '30px', 
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '10px' }}>Omzet Bulanan (Rp):</label>
          <input 
            type="number" 
            value={revenue} 
            onChange={(e) => setRevenue(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid #334155',
              background: '#0f172a',
              color: 'white'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '10px' }}>Estimasi Kebocoran (%):</label>
          <input 
            type="range" 
            min="1" 
            max="20" 
            value={leakageRate} 
            onChange={(e) => setLeakageRate(Number(e.target.value))}
            style={{ width: '100%' }}
          />
          <div style={{ textAlign: 'right' }}>{leakageRate}%</div>
        </div>

        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          background: '#0f172a', 
          borderRadius: '8px',
          borderLeft: '4px solid #ef4444'
        }}>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>Potensi Kebocoran Saat Ini:</p>
          <h3 style={{ color: '#ef4444' }}>Rp {leakageAmount.toLocaleString('id-ID')} / bulan</h3>
        </div>

        <div style={{ 
          padding: '20px', 
          background: '#0f172a', 
          borderRadius: '8px',
          borderLeft: '4px solid #22c55e'
        }}>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>Potensi Penghematan dengan V-Guard:</p>
          <h3 style={{ color: '#22c55e' }}>Rp {potentialSavings.toLocaleString('id-ID')} / bulan</h3>
        </div>
      </div>
    </div>
  );
}
