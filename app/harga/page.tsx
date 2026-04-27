'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { HARGA_MAP, PaketKey, fmtRupiah, WA_BASE } from '@/lib/constants';

const PAKET_ORDER: PaketKey[] = ['V-LITE', 'V-PRO', 'V-ADVANCE', 'V-ELITE', 'V-ULTRA'];

export default function HargaPage() {
  const { lang } = useLanguage();
  const t = translations[lang].harga;

  return (
    <div className="min-h-screen bg-navy">

      {/* ── Page Header ── */}
      <section className="relative px-5 pt-16 pb-14 bg-line-grid text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/4 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent/80 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full">
            {t.badge}
          </span>
          <h1 className="font-syne font-extrabold text-3xl sm:text-5xl text-white mt-5 mb-4">
            {t.title}
          </h1>
          <p className="font-mono text-sm text-gray-400 leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="px-5 pb-16">
        <div className="max-w-7xl mx-auto">

          {/* Row 1: V-LITE · V-PRO · V-ADVANCE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {PAKET_ORDER.slice(0, 3).map(key => (
              <PricingCard key={key} paketKey={key} lang={lang} t={t} />
            ))}
          </div>

          {/* Row 2: V-ELITE · V-ULTRA (centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[calc(66.67%+8px)] mx-auto">
            {PAKET_ORDER.slice(3).map(key => (
              <PricingCard key={key} paketKey={key} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment Info ── */}
      <section className="px-5 pb-16">
        <div className="max-w-lg mx-auto text-center border border-white/8 bg-card rounded-xl p-8">
          <div className="text-2xl mb-3">🏦</div>
          <h3 className="font-syne font-bold text-white text-lg mb-2">{t.paymentTitle}</h3>
          <p className="font-mono text-xs text-gray-400 mb-2">{t.paymentDesc}</p>
          <p className="font-mono text-xs text-primary tracking-wider">{t.bank}</p>
          <a
            href={`${WA_BASE}${encodeURIComponent('Halo VGuard, saya ingin berlangganan')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 font-mono text-xs font-bold text-navy bg-primary hover:bg-primary/90 px-6 py-2.5 rounded transition-all"
          >
            📱 {lang === 'id' ? 'Hubungi via WhatsApp' : 'Contact via WhatsApp'}
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 pb-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-2xl text-white text-center mb-8">
            {t.faqTitle}
          </h2>
          <div className="space-y-3">
            {t.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-white/8 bg-card rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-mono text-xs text-gray-300 hover:text-white transition-colors list-none">
                  <span>→ {faq.q}</span>
                  <span className="text-primary font-bold group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 font-mono text-xs text-gray-500 leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─────────────────────────────────────────
   PricingCard Sub-component
───────────────────────────────────────── */
function PricingCard({
  paketKey,
  lang,
  t,
}: {
  paketKey: PaketKey;
  lang: 'id' | 'en';
  t: ReturnType<typeof translations['id']['harga'] extends infer X ? () => X : never> extends never
    ? typeof translations['id']['harga']
    : typeof translations['id']['harga'];
}) {
  const paket = HARGA_MAP[paketKey];
  const isPro = paket.badge === 'POPULER';
  const isHot = paket.badge === 'HOT';

  return (
    <div
      className={`relative rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col
        ${isPro
          ? 'border-primary/50 bg-gradient-to-b from-primary/6 to-card shadow-lg shadow-primary/10'
          : isHot
          ? 'border-accent/40 bg-gradient-to-b from-accent/5 to-card'
          : 'border-white/8 bg-card hover:border-primary/25'
        }
        ${paket.comingSoon ? 'opacity-80' : ''}
      `}
    >
      {/* Coming Soon Overlay */}
      {paket.comingSoon && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-navy/60 backdrop-blur-[2px] rounded-xl">
          <span className="font-mono text-[11px] tracking-[0.2em] border border-primary/40 bg-primary/10 text-primary px-4 py-2 rounded-full">
            {t.comingSoon}
          </span>
        </div>
      )}

      {/* Badge */}
      {paket.badge && (
        <div
          className={`absolute top-4 right-4 font-mono text-[9px] tracking-[0.15em] font-bold px-2.5 py-1 rounded-full ${
            isPro ? 'bg-primary text-navy' : 'bg-accent text-white'
          }`}
        >
          {isPro ? t.popular : t.hot}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + Name */}
        <div className="mb-5">
          <span className="text-2xl">{paket.icon}</span>
          <div className="mt-2">
            <h3 className="font-syne font-extrabold text-xl text-white tracking-wider">{paketKey}</h3>
            <p className="font-mono text-[11px] text-gray-500">{paket.tagline[lang]}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-2">
          {paket.isCustom ? (
            <div>
              <span className="font-syne font-extrabold text-3xl text-white">{t.custom}</span>
              <p className="font-mono text-xs text-gray-500">{t.enterprise}</p>
            </div>
          ) : (
            <div>
              <span className="font-syne font-extrabold text-3xl text-white">
                {paket.bulanan !== null ? `Rp ${(paket.bulanan / 1000).toFixed(0)}rb` : '-'}
              </span>
              <span className="font-mono text-xs text-gray-400">{t.perBulan}</span>
              {paket.aktivasi !== null && (
                <p className="font-mono text-[10px] text-gray-600 mt-1">
                  {t.aktivasi}: {fmtRupiah(paket.aktivasi)}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 my-5" />

        {/* Features List */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {paket.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-0.5 text-xs flex-shrink-0 ${f.included ? 'text-primary' : 'text-gray-700'}`}>
                {f.included ? '✓' : '✗'}
              </span>
              <span className={`font-mono text-[11px] ${f.included ? 'text-gray-300' : 'text-gray-600'}`}>
                {lang === 'id' ? f.id : f.en}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {paket.comingSoon ? (
          <a
            href={`${WA_BASE}${encodeURIComponent(paket.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-mono text-[11px] tracking-wider font-bold border border-primary/30 text-primary hover:bg-primary/10 py-3 rounded transition-all"
          >
            {t.ctaPreOrder}
          </a>
        ) : (
          <a
            href={`${WA_BASE}${encodeURIComponent(paket.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center font-mono text-[11px] tracking-wider font-bold py-3 rounded transition-all ${
              isPro
                ? 'bg-primary text-navy hover:bg-primary/90'
                : 'border border-white/15 text-gray-300 hover:border-primary/40 hover:text-primary'
            }`}
          >
            {t.cta}
          </a>
        )}
      </div>
    </div>
  );
}

export const translations = {
  id: {
    beranda: {
      badge: 'Keamanan Siber Terpercaya',
      title1: 'Lindungi Bisnis Anda',
      title2: 'Dari Ancaman Digital',
      subtitle:
        'VGuard hadir sebagai solusi keamanan siber terdepan untuk UMKM dan enterprise Indonesia. Monitoring 24/7, deteksi ancaman realtime, dan respon cepat oleh tim ahli kami.',
      cta: 'Lihat Paket Harga',
      ctaDemo: 'Coba Kalkulator ROI',
      statsValue: ['500+', '99.9%', '< 5 Menit', '24/7'],
      statsLabel: ['Klien Aktif', 'Uptime Layanan', 'Waktu Respon', 'Monitoring'],
      featTitle: 'Semua yang Anda Butuhkan',
      features: [
        {
          icon: '🛡️',
          title: 'Deteksi Ancaman Realtime',
          desc: 'Sistem AI kami memantau jaringan Anda setiap detik dan mendeteksi ancaman sebelum berdampak.',
        },
        {
          icon: '📊',
          title: 'Dashboard Terpusat',
          desc: 'Pantau seluruh aset digital Anda dari satu dashboard yang intuitif dan mudah digunakan.',
        },
        {
          icon: '⚡',
          title: 'Respon Insiden Cepat',
          desc: 'Tim ahli kami siap merespon insiden keamanan dalam hitungan menit, bukan jam.',
        },
        {
          icon: '📋',
          title: 'Laporan Komprehensif',
          desc: 'Dapatkan laporan keamanan berkala yang jelas dan dapat langsung ditindaklanjuti.',
        },
        {
          icon: '🔒',
          title: 'Kepatuhan Regulasi',
          desc: 'Kami memastikan sistem Anda memenuhi standar keamanan dan regulasi yang berlaku di Indonesia.',
        },
        {
          icon: '🤝',
          title: 'Dukungan Dedicated',
          desc: 'Tim support kami siap membantu Anda kapan saja melalui berbagai saluran komunikasi.',
        },
      ],
      cta2Title: 'Siap Memulai?',
      cta2Subtitle:
        'Konsultasikan kebutuhan keamanan siber bisnis Anda secara gratis dengan tim ahli kami.',
      cta2Btn: 'Konsultasi Gratis',
    },

    harga: {
      badge: 'Pricing',
      title: 'Pilih Paket yang Tepat',
      subtitle:
        'Dari personal hingga enterprise, kami punya solusi keamanan siber yang sesuai dengan kebutuhan dan anggaran Anda.',
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
      paymentDesc: 'Pembayaran dapat dilakukan melalui transfer bank atau dompet digital.',
      bank: 'BCA · Mandiri · BNI · OVO · GoPay',
      faqTitle: 'Pertanyaan Umum',
      faqs: [
        {
          q: 'Apakah ada masa percobaan gratis?',
          a: 'Ya, kami menyediakan masa percobaan 7 hari gratis untuk semua paket berbayar tanpa perlu kartu kredit.',
        },
        {
          q: 'Bisa ganti paket kapan saja?',
          a: 'Tentu! Anda bisa upgrade atau downgrade paket kapan saja. Perubahan akan berlaku di periode billing berikutnya.',
        },
        {
          q: 'Bagaimana proses onboarding-nya?',
          a: 'Setelah pembayaran dikonfirmasi, tim kami akan menghubungi Anda dalam 1×24 jam untuk proses instalasi dan konfigurasi.',
        },
        {
          q: 'Apakah data saya aman?',
          a: 'Keamanan data Anda adalah prioritas utama kami. Semua data dienkripsi dan disimpan di server yang aman di Indonesia.',
        },
      ],
    },
  },

  en: {
    beranda: {
      badge: 'Trusted Cybersecurity',
      title1: 'Protect Your Business',
      title2: 'From Digital Threats',
      subtitle:
        'VGuard is Indonesia\'s leading cybersecurity solution for SMBs and enterprises. 24/7 monitoring, realtime threat detection, and rapid response by our expert team.',
      cta: 'View Pricing',
      ctaDemo: 'Try ROI Calculator',
      statsValue: ['500+', '99.9%', '< 5 Min', '24/7'],
      statsLabel: ['Active Clients', 'Service Uptime', 'Response Time', 'Monitoring'],
      featTitle: 'Everything You Need',
      features: [
        {
          icon: '🛡️',
          title: 'Realtime Threat Detection',
          desc: 'Our AI system monitors your network every second and detects threats before they cause damage.',
        },
        {
          icon: '📊',
          title: 'Centralized Dashboard',
          desc: 'Monitor all your digital assets from one intuitive and easy-to-use dashboard.',
        },
        {
          icon: '⚡',
          title: 'Rapid Incident Response',
          desc: 'Our expert team is ready to respond to security incidents in minutes, not hours.',
        },
        {
          icon: '📋',
          title: 'Comprehensive Reports',
          desc: 'Get regular security reports that are clear and immediately actionable.',
        },
        {
          icon: '🔒',
          title: 'Regulatory Compliance',
          desc: 'We ensure your systems meet the security standards and regulations applicable in Indonesia.',
        },
        {
          icon: '🤝',
          title: 'Dedicated Support',
          desc: 'Our support team is ready to help you anytime through various communication channels.',
        },
      ],
      cta2Title: 'Ready to Get Started?',
      cta2Subtitle:
        'Consult your business cybersecurity needs for free with our team of experts.',
      cta2Btn: 'Free Consultation',
    },

    harga: {
      badge: 'Pricing',
      title: 'Choose the Right Plan',
      subtitle:
        'From personal to enterprise, we have a cybersecurity solution that fits your needs and budget.',
      perBulan: '/month',
      aktivasi: 'Activation fee',
      popular: 'POPULAR',
      hot: 'HOT',
      custom: 'Custom',
      enterprise: 'Contact us for a quote',
      comingSoon: 'Coming Soon',
      ctaPreOrder: 'Pre-Order Now',
      cta: 'Choose Plan',
      paymentTitle: 'Payment Information',
      paymentDesc: 'Payment can be made via bank transfer or digital wallet.',
      bank: 'BCA · Mandiri · BNI · OVO · GoPay',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'Is there a free trial?',
          a: 'Yes, we provide a 7-day free trial for all paid plans with no credit card required.',
        },
        {
          q: 'Can I change plans anytime?',
          a: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will take effect in the next billing period.',
        },
        {
          q: 'What does the onboarding process look like?',
          a: 'After payment is confirmed, our team will contact you within 24 hours for installation and configuration.',
        },
        {
          q: 'Is my data secure?',
          a: 'Your data security is our top priority. All data is encrypted and stored on secure servers in Indonesia.',
        },
      ],
    },
  },
} as const;

export type Lang = keyof typeof translations;
// ─── WhatsApp Base URL ───────────────────────────────────────────
export const WA_BASE = 'https://wa.me/62xxxxxxxxxxx?text=';

// ─── Helpers ─────────────────────────────────────────────────────
export function fmtRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}

// ─── Types ───────────────────────────────────────────────────────
export type PaketKey = 'V-LITE' | 'V-PRO' | 'V-ADVANCE' | 'V-ELITE' | 'V-ULTRA';

interface Feature {
  id: string;
  en: string;
  included: boolean;
}

interface Paket {
  icon: string;
  tagline: { id: string; en: string };
  badge?: 'POPULER' | 'HOT' | null;
  bulanan: number | null;
  aktivasi: number | null;
  isCustom?: boolean;
  comingSoon?: boolean;
  waText: string;
  features: Feature[];
}

// ─── Pricing Data ────────────────────────────────────────────────
export const HARGA_MAP: Record<PaketKey, Paket> = {
  'V-LITE': {
    icon: '🛡️',
    tagline: { id: 'Proteksi dasar untuk personal', en: 'Basic protection for personal use' },
    badge: null,
    bulanan: 99000,
    aktivasi: 0,
    comingSoon: false,
    waText: 'Halo VGuard, saya ingin berlangganan paket V-LITE',
    features: [
      { id: 'Monitoring 1 perangkat', en: '1 device monitoring', included: true },
      { id: 'Notifikasi ancaman realtime', en: 'Realtime threat notification', included: true },
      { id: 'Laporan mingguan', en: 'Weekly report', included: true },
      { id: 'Dukungan email', en: 'Email support', included: true },
      { id: 'Dashboard lanjutan', en: 'Advanced dashboard', included: false },
      { id: 'Respon insiden 24/7', en: '24/7 incident response', included: false },
    ],
  },
  'V-PRO': {
    icon: '⚡',
    tagline: { id: 'Solusi terbaik untuk UMKM', en: 'Best solution for SMBs' },
    badge: 'POPULER',
    bulanan: 299000,
    aktivasi: 150000,
    comingSoon: false,
    waText: 'Halo VGuard, saya ingin berlangganan paket V-PRO',
    features: [
      { id: 'Monitoring 5 perangkat', en: '5 devices monitoring', included: true },
      { id: 'Notifikasi ancaman realtime', en: 'Realtime threat notification', included: true },
      { id: 'Laporan harian', en: 'Daily report', included: true },
      { id: 'Dukungan prioritas', en: 'Priority support', included: true },
      { id: 'Dashboard lanjutan', en: 'Advanced dashboard', included: true },
      { id: 'Respon insiden 24/7', en: '24/7 incident response', included: false },
    ],
  },
  'V-ADVANCE': {
    icon: '🔥',
    tagline: { id: 'Keamanan menyeluruh bisnis Anda', en: 'Comprehensive business security' },
    badge: 'HOT',
    bulanan: 599000,
    aktivasi: 250000,
    comingSoon: false,
    waText: 'Halo VGuard, saya ingin berlangganan paket V-ADVANCE',
    features: [
      { id: 'Monitoring 20 perangkat', en: '20 devices monitoring', included: true },
      { id: 'Notifikasi ancaman realtime', en: 'Realtime threat notification', included: true },
      { id: 'Laporan harian & bulanan', en: 'Daily & monthly report', included: true },
      { id: 'Dukungan prioritas 24/7', en: '24/7 priority support', included: true },
      { id: 'Dashboard lanjutan', en: 'Advanced dashboard', included: true },
      { id: 'Respon insiden 24/7', en: '24/7 incident response', included: true },
    ],
  },
  'V-ELITE': {
    icon: '💎',
    tagline: { id: 'Untuk perusahaan berkembang', en: 'For growing enterprises' },
    badge: null,
    bulanan: 1299000,
    aktivasi: 500000,
    comingSoon: false,
    waText: 'Halo VGuard, saya ingin berlangganan paket V-ELITE',
    features: [
      { id: 'Monitoring 50 perangkat', en: '50 devices monitoring', included: true },
      { id: 'Notifikasi ancaman realtime', en: 'Realtime threat notification', included: true },
      { id: 'Laporan komprehensif', en: 'Comprehensive report', included: true },
      { id: 'Dedicated account manager', en: 'Dedicated account manager', included: true },
      { id: 'Dashboard lanjutan', en: 'Advanced dashboard', included: true },
      { id: 'Respon insiden 24/7', en: '24/7 incident response', included: true },
    ],
  },
  'V-ULTRA': {
    icon: '🚀',
    tagline: { id: 'Enterprise unlimited', en: 'Enterprise unlimited' },
    badge: null,
    bulanan: null,
    aktivasi: null,
    isCustom: true,
    comingSoon: true,
    waText: 'Halo VGuard, saya tertarik dengan paket V-ULTRA (Pre-Order)',
    features: [
      { id: 'Perangkat tidak terbatas', en: 'Unlimited devices', included: true },
      { id: 'Notifikasi ancaman realtime', en: 'Realtime threat notification', included: true },
      { id: 'Laporan custom', en: 'Custom report', included: true },
      { id: 'Dedicated team keamanan', en: 'Dedicated security team', included: true },
      { id: 'Dashboard lanjutan', en: 'Advanced dashboard', included: true },
      { id: 'Respon insiden 24/7', en: '24/7 incident response', included: true },
    ],
  },
};
