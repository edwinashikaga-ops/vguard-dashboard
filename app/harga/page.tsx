'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { HARGA_MAP, PaketKey, fmtRupiah, WA_BASE } from '@/lib/constants';

const PAKET_ORDER: PaketKey[] = ['V-LITE', 'V-PRO', 'V-ADVANCE', 'V-ELITE', 'V-ULTRA'];

type HargaT = typeof translations['id']['harga'] | typeof translations['en']['harga'];

export default function HargaPage() {
  const { lang } = useLanguage();
  const t = translations[lang].harga as HargaT;

  return (
    <div className="min-h-screen bg-navy">
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

      <section className="px-5 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {PAKET_ORDER.slice(0, 3).map(key => (
              <PricingCard key={key} paketKey={key} lang={lang} t={t} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[calc(66.67%+8px)] mx-auto">
            {PAKET_ORDER.slice(3).map(key => (
              <PricingCard key={key} paketKey={key} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </section>

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
            {lang === 'id' ? 'Hubungi via WhatsApp' : 'Contact via WhatsApp'}
          </a>
        </div>
      </section>

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

function PricingCard({
  paketKey,
  lang,
  t,
}: {
  paketKey: PaketKey;
  lang: 'id' | 'en';
  t: HargaT;
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
      {paket.comingSoon && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-navy/60 backdrop-blur-[2px] rounded-xl">
          <span className="font-mono text-[11px] tracking-[0.2em] border border-primary/40 bg-primary/10 text-primary px-4 py-2 rounded-full">
            {t.comingSoon}
          </span>
        </div>
      )}

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
        <div className="mb-5">
          <span className="text-2xl">{paket.icon}</span>
          <div className="mt-2">
            <h3 className="font-syne font-extrabold text-xl text-white tracking-wider">{paketKey}</h3>
            <p className="font-mono text-[11px] text-gray-500">{paket.tagline[lang]}</p>
          </div>
        </div>

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

        <div className="h-px bg-white/6 my-5" />

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
