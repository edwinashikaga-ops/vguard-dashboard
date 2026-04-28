const fs = require('fs');
const content = `export const translations = {
  id: {
    nav: {
      beranda: "Beranda",
      produk: "Produk",
      roi: "Kalkulator ROI",
      harga: "Harga",
      referral: "Referral",
      investor: "Investor",
      kontak: "Kontak"
     },
    beranda: {
      badge: "Keamanan Siber Terpercaya",
      title1: "Lindungi Bisnis Anda",
      title2: "Dari Ancaman Digital",
      subtitle: "VGuard hadir sebagai solusi keamanan siber terdepan.",
      cta: "Lihat Harga",
      ctaDemo: "Hitung ROI",
      statsValue: ["500+", "99.9%", "<5m", "24/7"],
      statsLabel: ["Klien", "Uptime", "Response", "Monitoring"],
      featTitle: "Semua yang Anda Butuhkan",
      features: [
        { icon: "Shield", title: "Deteksi Ancaman Realtime", desc: "AI memantau jaringan Anda setiap detik." },
        { icon: "BarChart", title: "Dashboard Terpusat", desc: "Pantau aset dari satu dashboard." },
        { icon: "Zap", title: "Respon Cepat", desc: "Tim ahli merespon dalam hitungan menit." }
      ],
      cta2Title: "Siap Memulai?",
      cta2Subtitle: "Konsultasikan kebutuhan Anda",
      cta2Btn: "Konsultasi Gratis"
    },
    harga: {
      badge: "Paket Harga",
      title: "Pilih Paket yang Tepat",
      subtitle: "Solusi keamanan untuk setiap skala bisnis",
      paymentTitle: "Informasi Pembayaran",
      paymentDesc: "Pembayaran dapat dilakukan via transfer bank setelah konfirmasi.",
      bank: "BCA - Mandiri - BNI - BRI",
      faqTitle: "Pertanyaan Umum",
      faqs: [
        { q: "Apakah ada masa percobaan?", a: "Ya, kami menyediakan demo gratis selama 14 hari." },
        { q: "Bagaimana proses instalasi?", a: "Tim kami akan membantu instalasi dan konfigurasi penuh." },
        { q: "Apakah data saya aman?", a: "Data dienkripsi end-to-end dan disimpan di server lokal Indonesia." }
      ],
      comingSoon: "SEGERA HADIR",
      popular: "POPULER",
      hot: "HOT",
      custom: "Custom",
      enterprise: "Hubungi kami untuk harga enterprise",
      perBulan: "/bulan",
      aktivasi: "Aktivasi",
      ctaPreOrder: "Pre-Order Sekarang",
      cta: "Mulai Sekarang"
    },
    roi: {
      badge: "Kalkulator ROI",
      title: "Hitung Potensi Penghematan",
      subtitle: "Lihat berapa besar kerugian yang bisa dicegah dengan VGuard.",
      inputTitle: "Parameter Bisnis Anda",
      labels: {
        kasir: "Jumlah Kasir",
        transaksi: "Transaksi per Hari",
        nilai: "Nilai Rata-rata Transaksi",
        fraud: "Estimasi % Fraud/Kebocoran",
        paket: "Pilih Paket VGuard"
      },
      disclaimer: "Estimasi berdasarkan data industri retail Indonesia. Hasil aktual dapat bervariasi tergantung kondisi bisnis.",
      resultTitle: "Estimasi Hasil",
      metrics: {
        kerugianBulan: "Estimasi Kerugian/Bulan",
        kerugianTahun: "Estimasi Kerugian/Tahun",
        biayaVGuard: "Biaya VGuard/Bulan",
        penghematan: "Potensi Penghematan/Tahun",
        roi: "ROI",
        payback: "Payback Period"
      },
      bulan: "bulan",
      ctaWA: "Konsultasi via WhatsApp"
    }
  },
  nav: {
    beranda: "Home",
    produk: "Products",
    roi: "ROI Calculator",
    harga: "Pricing",
    referral: "Referral",
    investor: "Investor",
    kontak: "Contact"
   },
    beranda: {
      badge: "Trusted Cyber Security",
      title1: "Protect Your Business",
      title2: "From Digital Threats",
      subtitle: "VGuard is your leading cybersecurity solution.",
      cta: "See Pricing",
      ctaDemo: "Calculate ROI",
      statsValue: ["500+", "99.9%", "<5m", "24/7"],
      statsLabel: ["Clients", "Uptime", "Response", "Monitoring"],
      featTitle: "Everything You Need",
      features: [
        { icon: "Shield", title: "Realtime Threat Detection", desc: "AI monitors your network every second." },
        { icon: "BarChart", title: "Centralized Dashboard", desc: "Monitor assets from one dashboard." },
        { icon: "Zap", title: "Fast Response", desc: "Expert team responds in minutes." }
      ],
      cta2Title: "Ready to Start?",
      cta2Subtitle: "Consult your needs",
      cta2Btn: "Free Consultation"
    },
    harga: {
      badge: "Pricing Plans",
      title: "Choose the Right Package",
      subtitle: "Security solutions for every business scale",
      paymentTitle: "Payment Information",
      paymentDesc: "Payment can be made via bank transfer after confirmation.",
      bank: "BCA - Mandiri - BNI - BRI",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "Is there a trial period?", a: "Yes, we provide a free demo for 14 days." },
        { q: "How does installation work?", a: "Our team will assist with full installation and configuration." },
        { q: "Is my data safe?", a: "Data is end-to-end encrypted and stored on local Indonesian servers." }
      ],
      comingSoon: "COMING SOON",
      popular: "POPULAR",
      hot: "HOT",
      custom: "Custom",
      enterprise: "Contact us for enterprise pricing",
      perBulan: "/month",
      aktivasi: "Activation",
      ctaPreOrder: "Pre-Order Now",
      cta: "Get Started"
    },
    roi: {
      badge: "ROI Calculator",
      title: "Calculate Your Savings",
      subtitle: "See how much loss VGuard can prevent for your business.",
      inputTitle: "Your Business Parameters",
      labels: {
        kasir: "Number of Cashiers",
        transaksi: "Transactions per Day",
        nilai: "Average Transaction Value",
        fraud: "Estimated % Fraud/Leakage",
        paket: "Choose VGuard Package"
      },
      disclaimer: "Estimates based on Indonesian retail industry data. Actual results may vary depending on business conditions.",
      resultTitle: "Estimated Results",
      metrics: {
        kerugianBulan: "Estimated Loss/Month",
        kerugianTahun: "Estimated Loss/Year",
        biayaVGuard: "VGuard Cost/Month",
        penghematan: "Potential Savings/Year",
        roi: "ROI",
        payback: "Payback Period"
      },
      bulan: "months",
      ctaWA: "Consult via WhatsApp"
    }
  }
};
`;
fs.writeFileSync('lib/translations.ts', content, 'utf8');
console.log('DONE!');
console.log(fs.readFileSync('lib/translations.ts','utf8').split('\n')[0]);