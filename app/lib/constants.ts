// ─── WhatsApp Base URL ───────────────────────────────────────────
export const WA_BASE = 'https://wa.me/6282122190885?text=';

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
