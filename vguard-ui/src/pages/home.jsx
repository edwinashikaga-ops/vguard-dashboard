import React, { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState("ID");

  const content = {
    ID: {
      title: "🛡️ Sistem Pemantauan Bisnis Terpadu",
      subtitle: "Lindungi operasional bisnis Anda dengan deteksi kecurangan real-time dan analisis mendalam.",
      cta: "Mulai Sekarang",
      whyTitle: "Kenapa Memilih V-Guard?",
      features: [
        {
          icon: "📹",
          title: "Integrasi CCTV & POS",
          desc: "Pemantauan visual dan data transaksi yang tersinkronisasi secara real-time untuk visibilitas penuh."
        },
        {
          icon: "⚡",
          title: "Deteksi Kecurangan Instan",
          desc: "Menangkap anomali VOID dan manipulasi kasir dalam hitungan detik (Aturan R1-R6)."
        },
        {
          icon: "📊",
          title: "Analisis Forensik Keuangan",
          desc: "Laporan mendalam untuk audit bank dan kepatuhan bisnis dengan dokumentasi lengkap."
        },
        {
          icon: "💰",
          title: "Penghematan Operasional",
          desc: "Meminimalkan kebocoran dana hingga 15% dari total omzet bulanan Anda."
        }
      ]
    },
    EN: {
      title: "🛡️ Integrated Business Monitoring System",
      subtitle: "Protect your business operations with real-time fraud detection and deep analysis.",
      cta: "Get Started",
      whyTitle: "Why Choose V-Guard?",
      features: [
        {
          icon: "📹",
          title: "CCTV & POS Integration",
          desc: "Visual monitoring and transaction data synchronized in real-time for full visibility."
        },
        {
          icon: "⚡",
          title: "Instant Fraud Detection",
          desc: "Catch VOID anomalies and cashier manipulation in seconds (Rules R1-R6)."
        },
        {
          icon: "📊",
          title: "Financial Forensic Analysis",
          desc: "In-depth reports for bank audits and business compliance with complete documentation."
        },
        {
          icon: "💰",
          title: "Operational Savings",
          desc: "Minimize fund leakage up to 15% of your monthly revenue."
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <div style={{ color: 'white' }}>
      {/* HERO SECTION */}
      <div style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          color: '#00d4ff', 
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          {currentContent.title}
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#94a3b8', 
          marginBottom: '40px',
          maxWidth: '700px',
          margin: '0 auto 40px'
        }}>
          {currentContent.subtitle}
        </p>
        <button style={{
          padding: '14px 40px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: '#00d4ff',
          color: '#020617',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: '0.3s'
        }}>
          {currentContent.cta}
        </button>
      </div>

      {/* FEATURES SECTION */}
      <div style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid #1e293b'
      }}>
        <h2 style={{ 
          fontSize: '36px', 
          color: '#00d4ff', 
          marginBottom: '50px',
          textAlign: 'center'
        }}>
          {currentContent.whyTitle}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {currentContent.features.map((feature, idx) => (
            <div key={idx} style={{
              background: '#1e293b',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #334155',
              transition: '0.3s',
              cursor: 'default'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                color: '#00d4ff', 
                marginBottom: '10px',
                fontSize: '18px'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                color: '#94a3b8', 
                lineHeight: '1.6',
                fontSize: '14px'
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* LANGUAGE SELECTOR (HIDDEN - untuk testing) */}
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '20px',
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => setLang("ID")}
          style={{
            padding: '8px 16px',
            background: lang === "ID" ? '#00d4ff' : '#1e293b',
            color: lang === "ID" ? '#020617' : 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ID
        </button>
        <button 
          onClick={() => setLang("EN")}
          style={{
            padding: '8px 16px',
            background: lang === "EN" ? '#00d4ff' : '#1e293b',
            color: lang === "EN" ? '#020617' : 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          EN
        </button>
      </div>
    </div>
  );
}
