export const translations = {
  id: {
    nav: {
      beranda: "Beranda",
      harga: "Harga",
      roi: "Kalkulator ROI",
      referral: "Referral",
      investor: "Investor",
      adminPortal: "Admin Portal"
    },
    beranda: {
      badge: 'Keamanan Siber Terpercaya',
      title1: 'Lindungi Bisnis Anda',
      title2: 'Dari Ancaman Digital',
      subtitle: 'VGuard hadir sebagai solusi keamanan siber terdepan untuk UMKM dan enterprise Indonesia.',
      cta: 'Lihat Paket Harga',
      ctaDemo: 'Coba Kalkulator ROI',
      statsValue: ['500+', '99.9%', '< 5 Menit', '24/7'],
      statsLabel: ['Klien Aktif', 'Uptime Layanan', 'Waktu Respon', 'Monitoring'],
      featTitle: 'Semua yang Anda Butuhkan',
      features: [
        { icon: '🛡️', title: 'Deteksi Ancaman Realtime', desc: 'AI memantau jaringan Anda setiap detik.' },
        { icon: '📊', title: 'Dashboard Terpusat', desc: 'Pantau aset dari satu dashboard intuitif.' },
        { icon: '⚡', title: 'Respon Insiden Cepat', desc: 'Tim ahli merespon dalam hitungan menit.' }
      ],
      cta2Title: 'Siap Memulai?',
      cta2Subtitle: 'Konsultasikan kebutuhan keamanan siber bisnis Anda secara gratis.',
      cta2Btn: 'Konsultasi Gratis',
    },
    harga: {
      badge: 'Pricing',
      title: 'Pilih Paket yang Tepat',
      subtitle: 'Solusi keamanan siber yang sesuai dengan anggaran Anda.',
      perBulan: '/bulan',
      aktivasi: 'Biaya aktivasi',
      popular: 'POPULER',
      hot: 'HOT',
      custom: 'Custom',
      enterprise: 'Hubungi kami untuk penawaran',
      comingSoon: 'Segera Hadir',
      ctaPreOrder: 'Pre-Order Sekarang',
      cta: 'Pilih Paket',
      paymentTitle: 'Informasi Pembayaran',
      paymentDesc: 'Pembayaran via transfer bank atau dompet digital.',
      bank: 'BCA · Mandiri · BNI · OVO · GoPay',
      faqTitle: 'Pertanyaan Umum',
      faqs: [
        { q: 'Apakah ada masa percobaan gratis?', a: 'Ya, 7 hari gratis tanpa kartu kredit.' }
      ],
    },
    roi: {
      badge: "Kalkulator ROI",
      title: "Hitung Potensi Penghematan Anda",
      subtitle: "Simulasi kerugian fraud vs investasi VGuard.",
      inputTitle: "Parameter Bisnis",
      resultTitle: "Hasil Analisis Estimasi",
      labels: {
        kasir: "Jumlah Kasir",
        transaksi: "Transaksi/Hari",
        nilai: "Rata-rata Transaksi",
        fraud: "Estimasi Fraud (%)",
        paket: "Pilih Paket VGuard"
      },
      metrics: {
        kerugianBulan: "Potensi Rugi/Bulan",
        kerugianTahun: "Potensi Rugi/Tahun",
        biayaVGuard: "Investasi VGuard",
        penghematan: "Total Penghematan",
        roi: "ROI Est.",
        payback: "Payback Period"
      },
      bulan: "Bulan",
      ctaWA: "Konsultasi Analisis Lengkap",
      disclaimer: "*Hasil ini adalah estimasi berdasarkan data rata-rata industri."
    }
  },

  en: {
    nav: {
      beranda: "Home",
      harga: "Pricing",
      roi: "ROI Calculator",
      referral: "Referral",
      investor: "Investor",
      adminPortal: "Admin Portal"
    },
    beranda: {
      badge: 'Trusted Cybersecurity',
      title1: 'Protect Your Business',
      title2: 'From Digital Threats',
      subtitle: "VGuard is Indonesia's leading cybersecurity solution for SMBs.",
      cta: 'View Pricing',
      ctaDemo: 'Try ROI Calculator',
      statsValue: ['500+', '99.9%', '< 5 Min', '24/7'],
      statsLabel: ['Active Clients', 'Service Uptime', 'Response Time', 'Monitoring'],
      featTitle: 'Everything You Need',
      features: [
        { icon: '🛡️', title: 'Realtime Threat Detection', desc: 'AI monitors your network every second.' },
        { icon: '📊', title: 'Centralized Dashboard', desc: 'Monitor assets from one intuitive dashboard.' },
        { icon: '⚡', title: 'Rapid Incident Response', desc: 'Expert team responds in minutes.' }
      ],
      cta2Title: 'Ready to Get Started?',
      cta2Subtitle: 'Consult your business cybersecurity needs for free.',
      cta2Btn: 'Free Consultation',
    },
    harga: {
      badge: 'Pricing',
      title: 'Choose the Right Plan',
      subtitle: 'Cybersecurity solutions that fit your budget.',
      perBulan: '/month',
      aktivasi: 'Activation fee',
      popular: 'POPULER',
      hot: 'HOT',
      custom: 'Custom',
      enterprise: 'Contact us for a quote',
      comingSoon: 'Coming Soon',
      ctaPreOrder: 'Pre-Order Now',
      cta: 'Choose Plan',
      paymentTitle: 'Payment Information',
      paymentDesc: 'Payment via bank transfer or digital wallet.',
      bank: 'BCA · Mandiri · BNI · OVO · GoPay',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'Is there a free trial?', a: 'Yes, 7 days free trial.' }
      ],
    },
    roi: {
      badge: "ROI Calculator",
      title: "Calculate Your Potential Savings",
      subtitle: "Simulate fraud losses vs VGuard investment.",
      inputTitle: "Business Parameters",
      resultTitle: "Estimated Analysis Results",
      labels: {
        kasir: "Number of Cashiers",
        transaksi: "Transactions/Day",
        nilai: "Average Transaction Value",
        fraud: "Estimated Fraud (%)",
        paket: "Select VGuard Plan"
      },
      metrics: {
        kerugianBulan: "Potential Loss/Month",
        kerugianTahun: "Potential Loss/Year",
        biayaVGuard: "VGuard Investment",
        penghematan: "Total Savings",
        roi: "Est. ROI",
        payback: "Payback Period"
      },
      bulan: "Months",
      ctaWA: "Consult Full Analysis",
      disclaimer: "*Results are estimates based on industry average data."
    }
  },
} as const;

export type Lang = keyof typeof translations;
