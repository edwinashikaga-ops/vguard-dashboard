'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { HARGA_MAP, PaketKey, fmtRupiah, WA_BASE } from '@/lib/constants';

const AVAILABLE_PAKETS: PaketKey[] = ['V-LITE', 'V-PRO', 'V-ADVANCE', 'V-ELITE'];

export default function ROIPage() {
  const { lang } = useLanguage();
  const t = translations[lang].roi;

  /* ── Inputs ── */
  const [kasir, setKasir]           = useState(3);
  const [transaksi, setTransaksi]   = useState(100);
  const [nilai, setNilai]           = useState(50000);
  const [fraud, setFraud]           = useState(2);
  const [paket, setPaket]           = useState<PaketKey>('V-PRO');

  /* ── Computed ── */
  const calc = useMemo(() => {
    const txPerBulan    = transaksi * 30;
    const totalBulan    = txPerBulan * nilai;
    const kerugianBulan = totalBulan * (fraud / 100);
    const kerugianTahun = kerugianBulan * 12;
    const biayaPerBulan = HARGA_MAP[paket].bulanan ?? 0;
    const biayaPerTahun = biayaPerBulan * 12;
    const penghematan   = kerugianTahun - biayaPerTahun;
    const roi           = biayaPerTahun > 0 ? (penghematan / biayaPerTahun) * 100 : 0;
    const payback       = kerugianBulan > 0 ? biayaPerBulan / kerugianBulan : 0;
    return { kerugianBulan, kerugianTahun, biayaPerBulan, penghematan, roi, payback };
  }, [kasir, transaksi, nilai, fraud, paket]);

  const isPositive = calc.penghematan >= 0;

  return (
    <div className="min-h-screen bg-navy">

      {/* ── Header ── */}
      <section className="relative px-5 pt-16 pb-12 bg-line-grid text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/4 to-transparent" />
        <div className="relative z-10 max-w-xl mx-auto">
          <span className="font-mono text-[11px] tracking-[0.2em] text-primary/80 border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
            {t.badge}
          </span>
          <h1 className="font-syne font-extrabold text-3xl sm:text-5xl text-white mt-5 mb-4">
            {t.title}
          </h1>
          <p className="font-mono text-sm text-gray-400 leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* ── Calculator Body ── */}
      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6">

            {/* ── LEFT: Inputs ── */}
            <div className="border border-white/8 bg-card rounded-2xl p-7">
              <h2 className="font-syne font-bold text-white text-lg mb-7">{t.inputTitle}</h2>

              {/* Kasir */}
              <InputRow label={t.labels.kasir} value={kasir} display={String(kasir)}>
                <input
                  type="range" min={1} max={20} value={kasir}
                  onChange={e => setKasir(+e.target.value)}
                />
                <div className="flex justify-between font-mono text-[10px] text-gray-600 mt-1">
                  <span>1</span><span className="text-primary font-bold">{kasir}</span><span>20</span>
                </div>
              </InputRow>

              {/* Transaksi/hari */}
              <InputRow label={t.labels.transaksi} value={transaksi} display={String(transaksi)}>
                <input
                  type="range" min={10} max={1000} step={10} value={transaksi}
                  onChange={e => setTransaksi(+e.target.value)}
                />
                <div className="flex justify-between font-mono text-[10px] text-gray-600 mt-1">
                  <span>10</span><span className="text-primary font-bold">{transaksi}</span><span>1000</span>
                </div>
              </InputRow>

              {/* Nilai rata-rata */}
              <InputRow label={t.labels.nilai} value={nilai} display={fmtRupiah(nilai)}>
                <input
                  type="range" min={5000} max={500000} step={5000} value={nilai}
                  onChange={e => setNilai(+e.target.value)}
                />
                <div className="flex justify-between font-mono text-[10px] text-gray-600 mt-1">
                  <span>Rp 5rb</span>
                  <span className="text-primary font-bold">{fmtRupiah(nilai)}</span>
                  <span>Rp 500rb</span>
                </div>
              </InputRow>

              {/* % Fraud */}
              <InputRow label={t.labels.fraud} value={fraud} display={`${fraud}%`}>
                <input
                  type="range" min={0} max={10} step={0.5} value={fraud}
                  onChange={e => setFraud(+e.target.value)}
                />
                <div className="flex justify-between font-mono text-[10px] text-gray-600 mt-1">
                  <span>0%</span>
                  <span
                    className="font-bold"
                    style={{ color: fraud < 2 ? '#4ade80' : fraud < 5 ? '#facc15' : '#f87171' }}
                  >
                    {fraud}%
                  </span>
                  <span>10%</span>
                </div>
              </InputRow>

              {/* Paket Select */}
              <div className="mb-6">
                <label className="block font-mono text-[11px] text-gray-400 tracking-wider mb-3">
                  {t.labels.paket}
                </label>
                <select
                  value={paket}
                  onChange={e => setPaket(e.target.value as PaketKey)}
                  className="w-full bg-navy border border-white/12 text-white font-mono text-xs px-4 py-3 rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
                >
                  {AVAILABLE_PAKETS.map(k => (
                    <option key={k} value={k}>
                      {k} — {HARGA_MAP[k].bulanan !== null ? fmtRupiah(HARGA_MAP[k].bulanan!) : 'Custom'}/bln
                    </option>
                  ))}
                </select>
              </div>

              {/* Info box */}
              <div className="border border-white/6 rounded-lg p-4 font-mono text-[10px] text-gray-600 leading-relaxed">
                {t.disclaimer}
              </div>
            </div>

            {/* ── RIGHT: Results ── */}
            <div className="flex flex-col gap-4">

              {/* Primary metrics */}
              <div className="border border-white/8 bg-card rounded-2xl p-7">
                <h2 className="font-syne font-bold text-white text-lg mb-6">{t.resultTitle}</h2>

                {/* Bar: Kerugian vs Biaya */}
                <div className="mb-7">
                  <div className="flex justify-between font-mono text-[10px] text-gray-500 mb-2">
                    <span>{lang === 'id' ? 'Kerugian/Tahun' : 'Annual Loss'}</span>
                    <span>{lang === 'id' ? 'Biaya V-Guard/Tahun' : 'V-Guard Cost/Year'}</span>
                  </div>
                  <div className="flex gap-2 h-5">
                    <div
                      className="h-full rounded bg-red-500/60 transition-all duration-500"
                      style={{ flex: Math.max(calc.kerugianTahun, 1) }}
                    />
                    <div
                      className="h-full rounded bg-primary/60 transition-all duration-500"
                      style={{ flex: Math.max(calc.biayaPerBulan * 12, 1) }}
                    />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-gray-600 mt-1">
                    <span className="text-red-400">{fmtRupiah(calc.kerugianTahun)}</span>
                    <span className="text-primary">{fmtRupiah(calc.biayaPerBulan * 12)}</span>
                  </div>
                </div>

                {/* 2×3 Metric grid */}
                <div className="grid grid-cols-2 gap-3">
                  <MetricCard label={t.metrics.kerugianBulan} value={fmtRupiah(calc.kerugianBulan)} accent="red" />
                  <MetricCard label={t.metrics.kerugianTahun} value={fmtRupiah(calc.kerugianTahun)} accent="red" />
                  <MetricCard label={t.metrics.biayaVGuard}   value={fmtRupiah(calc.biayaPerBulan)} accent="cyan" />
                  <MetricCard
                    label={t.metrics.penghematan}
                    value={fmtRupiah(Math.abs(calc.penghematan))}
                    prefix={isPositive ? '+' : '-'}
                    accent={isPositive ? 'green' : 'red'}
                  />
                  <MetricCard
                    label={t.metrics.roi}
                    value={`${calc.roi.toFixed(0)}%`}
                    accent={calc.roi > 0 ? 'green' : 'red'}
                    large
                  />
                  <MetricCard
                    label={t.metrics.payback}
                    value={`${calc.payback.toFixed(1)} ${t.bulan}`}
                    accent="purple"
                    large
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="border border-primary/20 bg-primary/5 rounded-2xl p-6 text-center">
                <p className="font-syne font-bold text-white text-lg mb-1">
                  {lang === 'id'
                    ? `Hemat hingga ${fmtRupiah(Math.max(calc.penghematan, 0))}/tahun`
                    : `Save up to ${fmtRupiah(Math.max(calc.penghematan, 0))}/year`}
                </p>
                <p className="font-mono text-xs text-gray-400 mb-5">
                  {lang === 'id'
                    ? `dengan paket ${paket} mulai ${fmtRupiah(calc.biayaPerBulan)}/bulan`
                    : `with ${paket} plan from ${fmtRupiah(calc.biayaPerBulan)}/month`}
                </p>
                <a
                  href={`${WA_BASE}${encodeURIComponent(
                    `Halo VGuard, saya tertarik paket ${paket}. Estimasi kerugian saya ${fmtRupiah(calc.kerugianBulan)}/bulan, potensi hemat ${fmtRupiah(calc.penghematan)}/tahun.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-[11px] tracking-wider font-bold bg-primary text-navy hover:bg-primary/90 px-8 py-3 rounded transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  📱 {t.ctaWA}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ── */

function InputRow({
  label,
  value,
  display,
  children,
}: {
  label: string;
  value: number;
  display: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <label className="font-mono text-[11px] text-gray-400 tracking-wider">{label}</label>
        <span className="font-mono text-[11px] text-primary font-bold">{display}</span>
      </div>
      {children}
    </div>
  );
}

function MetricCard({
  label,
  value,
  accent = 'cyan',
  large = false,
  prefix = '',
}: {
  label: string;
  value: string;
  accent?: 'cyan' | 'red' | 'green' | 'purple';
  large?: boolean;
  prefix?: string;
}) {
  const colors: Record<string, string> = {
    cyan:   '#00E5FF',
    red:    '#f87171',
    green:  '#4ade80',
    purple: '#a78bfa',
  };
  const color = colors[accent];

  return (
    <div className="border border-white/6 rounded-xl p-4">
      <p className="font-mono text-[10px] text-gray-500 mb-2 leading-tight">{label}</p>
      <p
        className={`font-syne font-extrabold leading-none transition-all duration-300 ${large ? 'text-2xl' : 'text-lg'}`}
        style={{ color }}
      >
        {prefix}{value}
      </p>
    </div>
  );
}
