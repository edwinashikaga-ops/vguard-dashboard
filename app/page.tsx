'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { WA_BASE } from '@/lib/constants';

export default function BerandaPage() {
  const { lang } = useLanguage();
  const t = translations[lang].beranda;

  return (
    <div className="min-h-screen bg-navy overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative px-5 pt-20 pb-20 bg-line-grid">

        {/* Ambient glows */}
        <div className="pointer-events-none absolute top-10 left-1/3 w-80 h-80 bg-primary/6 rounded-full blur-[80px]" />
        <div className="pointer-events-none absolute top-32 right-1/4 w-60 h-60 bg-accent/6 rounded-full blur-[60px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 border border-primary/25 bg-primary/5 text-primary font-mono text-[11px] tracking-[0.15em] px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t.badge}
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up stagger-1 font-syne font-extrabold leading-[1.05] mb-6">
            <span className="block text-4xl sm:text-6xl lg:text-7xl text-white">
              {t.title1}
            </span>
            <span className="block text-4xl sm:text-6xl lg:text-7xl text-primary glow-cyan">
              {t.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-slide-up stagger-2 font-mono text-sm text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/harga"
              className="w-full sm:w-auto font-mono text-[12px] tracking-widest font-bold bg-primary text-navy hover:bg-primary/90 px-8 py-3.5 rounded transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              {t.cta} →
            </Link>
            <Link
              href="/roi"
              className="w-full sm:w-auto font-mono text-[12px] tracking-widest border border-white/15 text-gray-300 hover:text-white hover:border-primary/40 px-8 py-3.5 rounded transition-all hover:bg-white/3"
            >
              {t.ctaDemo}
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section className="border-y border-white/5 bg-card">
        <div className="max-w-5xl mx-auto px-5 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.statsLabel.map((label, i) => (
            <div key={i} className="text-center">
              <div className="font-syne font-extrabold text-2xl text-primary mb-1">
                {t.statsValue[i]}
              </div>
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES GRID  (6 boxes)
      ══════════════════════════════════════════ */}
      <section className="px-5 py-24">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-14">
            <span className="font-mono text-[11px] tracking-[0.2em] text-primary/70 uppercase">
              Core Capabilities
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mt-3">
              {t.featTitle}
            </h2>
          </div>

          {/* 6-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.features.map((feat, i) => (
              <div
                key={i}
                className={`group card-hover border border-white/6 bg-card rounded-xl p-6 cursor-default animate-slide-up stagger-${Math.min(i + 1, 6)}`}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center text-xl mb-5 group-hover:bg-primary/12 transition-colors">
                  {feat.icon}
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-white text-[15px] mb-2 tracking-wide">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-[11px] text-gray-500 leading-relaxed">
                  {feat.desc}
                </p>

                {/* Accent line on hover */}
                <div className="mt-5 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="px-5 pb-24">
        <div className="max-w-3xl mx-auto text-center gradient-border bg-card rounded-2xl p-12">
          <h2 className="font-syne font-bold text-3xl text-white mb-3">{t.cta2Title}</h2>
          <p className="font-mono text-sm text-gray-400 mb-8">{t.cta2Subtitle}</p>
          <a
            href={`${WA_BASE}${encodeURIComponent('Halo VGuard, saya ingin konsultasi gratis')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-[12px] tracking-widest font-bold bg-primary text-navy hover:bg-primary/90 px-10 py-3.5 rounded transition-all hover:shadow-xl hover:shadow-primary/20"
          >
            {t.cta2Btn} →
          </a>
        </div>
      </section>

    </div>
  );
}
