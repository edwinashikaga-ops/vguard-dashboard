// ─────────────────────────────────────────────────────────────────
//  V-Guard Constants  ·  HARGA_MAP  &  AI_AGENTS
// ─────────────────────────────────────────────────────────────────

export type PaketKey = 'V-LITE' | 'V-PRO' | 'V-ADVANCE' | 'V-ELITE' | 'V-ULTRA';
export type AgentStatus = 'online' | 'standby' | 'offline';

export interface Feature {
  id: string;
  en: string;
  included: boolean;
}

export interface PaketData {
  bulanan: number | null;       // null → Custom pricing
  aktivasi: number | null;
  icon: string;
  tagline: { id: string; en: string };
  badge?: 'POPULER' | 'HOT';
  comingSoon: boolean;
  isCustom: boolean;
  features: Feature[];
  waText: string;
}

export const HARGA_MAP: Record<PaketKey, PaketData> = {
  'V-LITE': {
    bulanan:  150_000,
    aktivasi: 250_000,
    icon: '🛡️',
    tagline: { id: 'Starter Protection', en: 'Starter Protection' },
    comingSoon: false,
    isCustom:   false,
    features: [
      { id: 'Hingga 2 Kasir',        en: 'Up to 2 Cashiers',       included: true  },
      { id: 'Monitoring Dasar',       en: 'Basic Monitoring',        included: true  },
      { id: 'Laporan Mingguan',       en: 'Weekly Reports',          included: true  },
      { id: 'Notifikasi Email',       en: 'Email Notifications',     included: true  },
      { id: 'Support 9–17 WIB',      en: 'Support 9–17 WIB',        included: true  },
      { id: 'AI Anomaly Detection',   en: 'AI Anomaly Detection',    included: false },
      { id: 'Integrasi CCTV',         en: 'CCTV Integration',        included: false },
      { id: 'Alert WhatsApp',         en: 'WhatsApp Alert',          included: false },
      { id: 'Multi-Store',            en: 'Multi-Store',             included: false },
    ],
    waText: 'Halo VGuard, saya ingin berlangganan paket V-LITE',
  },

  'V-PRO': {
    bulanan:  450_000,
    aktivasi: 750_000,
    icon: '⚔️',
    tagline: { id: 'Business Essential', en: 'Business Essential' },
    badge: 'POPULER',
    comingSoon: false,
    isCustom:   false,
    features: [
      { id: 'Hingga 5 Kasir',        en: 'Up to 5 Cashiers',        included: true  },
      { id: 'AI Anomaly Detection',   en: 'AI Anomaly Detection',    included: true  },
      { id: 'Laporan Harian',         en: 'Daily Reports',           included: true  },
      { id: 'Alert WhatsApp',         en: 'WhatsApp Alert',          included: true  },
      { id: 'Support 24/7',           en: '24/7 Support',            included: true  },
      { id: 'Demo Gratis 7 Hari',     en: '7-Day Free Demo',         included: true  },
      { id: 'Integrasi CCTV',         en: 'CCTV Integration',        included: false },
      { id: 'Multi-Store Support',    en: 'Multi-Store Support',     included: false },
      { id: 'Custom Integration',     en: 'Custom Integration',      included: false },
    ],
    waText: 'Halo VGuard, saya ingin berlangganan paket V-PRO',
  },

  'V-ADVANCE': {
    bulanan:  1_200_000,
    aktivasi: 3_500_000,
    icon: '⭐',
    tagline: { id: 'Advanced Analytics', en: 'Advanced Analytics' },
    comingSoon: false,
    isCustom:   false,
    features: [
      { id: 'Kasir Unlimited',        en: 'Unlimited Cashiers',      included: true  },
      { id: 'Integrasi CCTV',         en: 'CCTV Integration',        included: true  },
      { id: 'Dashboard Real-time',    en: 'Real-time Dashboard',     included: true  },
      { id: 'Multi-Store Support',    en: 'Multi-Store Support',     included: true  },
      { id: 'Priority Support 24/7',  en: 'Priority Support 24/7',   included: true  },
      { id: 'Demo Gratis 7 Hari',     en: '7-Day Free Demo',         included: true  },
      { id: 'Elite AI Squad',         en: 'Elite AI Squad',          included: false },
      { id: 'Custom Integration',     en: 'Custom Integration',      included: false },
      { id: 'Dedicated Support',      en: 'Dedicated Support',       included: false },
    ],
    waText: 'Halo VGuard, saya ingin berlangganan paket V-ADVANCE',
  },

  'V-ELITE': {
    bulanan:  3_500_000,
    aktivasi: 10_000_000,
    icon: '🔒',
    tagline: { id: 'Enterprise Grade', en: 'Enterprise Grade' },
    comingSoon: true,
    isCustom:   false,
    features: [
      { id: 'Elite AI Squad Penuh',   en: 'Full Elite AI Squad',     included: true  },
      { id: 'Custom Integration',     en: 'Custom Integration',      included: true  },
      { id: 'Dedicated Support',      en: 'Dedicated Support',       included: true  },
      { id: 'SLA Garansi 99.9%',      en: '99.9% SLA Guarantee',     included: true  },
      { id: 'On-site Setup',          en: 'On-site Setup',           included: true  },
    ],
    waText: 'Halo VGuard, saya ingin Pre-Order V-ELITE',
  },

  'V-ULTRA': {
    bulanan:  null,
    aktivasi: null,
    icon: '👑',
    tagline: { id: 'Full Ecosystem', en: 'Full Ecosystem' },
    badge: 'HOT',
    comingSoon: true,
    isCustom:   true,
    features: [
      { id: 'Full AI Ecosystem',      en: 'Full AI Ecosystem',       included: true  },
      { id: 'White-label Solution',   en: 'White-label Solution',    included: true  },
      { id: 'On-premise Option',      en: 'On-premise Option',       included: true  },
      { id: 'Custom Deployment',      en: 'Custom Deployment',       included: true  },
      { id: 'Executive Support',      en: 'Executive Support',       included: true  },
    ],
    waText: 'Halo VGuard, saya ingin Pre-Order V-ULTRA',
  },
};

// ─────────────────────────────────────────────────────────────────
//  Elite AI Squad — 10 Agents
// ─────────────────────────────────────────────────────────────────

export interface Agent {
  id:     number;
  name:   string;
  role:   string;
  status: AgentStatus;
  accent: string;
}

export const AI_AGENTS: Agent[] = [
  { id: 1,  name: 'Master Agent',   role: 'Orchestrator',         status: 'online',  accent: '#FFD700' },
  { id: 2,  name: 'Liaison Agent',  role: 'Data Filter & Router', status: 'online',  accent: '#00E5FF' },
  { id: 3,  name: 'CCTV Agent',     role: 'Computer Vision',      status: 'online',  accent: '#00E5FF' },
  { id: 4,  name: 'Kasir Agent',    role: 'Transaction Monitor',  status: 'online',  accent: '#00E5FF' },
  { id: 5,  name: 'Anomaly Agent',  role: 'Pattern Detection',    status: 'online',  accent: '#00E5FF' },
  { id: 6,  name: 'Alert Agent',    role: 'Notification Engine',  status: 'online',  accent: '#7B2FFF' },
  { id: 7,  name: 'Report Agent',   role: 'Data Aggregator',      status: 'standby', accent: '#7B2FFF' },
  { id: 8,  name: 'ROI Agent',      role: 'Financial Analyzer',   status: 'standby', accent: '#7B2FFF' },
  { id: 9,  name: 'Referral Agent', role: 'Partner Manager',      status: 'standby', accent: '#7B2FFF' },
  { id: 10, name: 'Audit Agent',    role: 'Log Reviewer',         status: 'offline', accent: '#555' },
];

// ─────────────────────────────────────────────────────────────────
//  Utility
// ─────────────────────────────────────────────────────────────────

export const WA_NUMBER = '6282122190885';
export const WA_BASE   = `https://wa.me/${WA_NUMBER}?text=`;

export function fmtRupiah(n: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}
