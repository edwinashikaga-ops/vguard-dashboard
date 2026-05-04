import React from 'react';

export default function Portal() {
  return (
    <div style={{ color: 'white', maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <div style={{ 
        background: '#1e293b', 
        padding: '40px', 
        borderRadius: '16px', 
        textAlign: 'center',
        border: '1px solid #334155'
      }}>
        <h2 style={{ color: '#00d4ff', marginBottom: '10px' }}>🔑 Portal Klien</h2>
        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Masuk ke dashboard utama Anda.</p>
        
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>User ID</label>
          <input 
            type="text" 
            placeholder="Masukkan ID Anda"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #334155',
              background: '#0f172a',
              color: 'white'
            }}
          />
        </div>

        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #334155',
              background: '#0f172a',
              color: 'white'
            }}
          />
        </div>

        <button style={{
          width: '100%',
          padding: '14px',
          borderRadius: '8px',
          border: 'none',
          background: '#00d4ff',
          color: '#020617',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          Akses Dashboard
        </button>

        <p style={{ marginTop: '20px', fontSize: '12px', color: '#64748b' }}>
          Lupa password? Hubungi support V-Guard.
        </p>
      </div>
    </div>
  );
}
