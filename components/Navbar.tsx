'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const t = translations[lang].nav;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.beranda,  href: '/' },
    { label: t.harga,    href: '/harga' },
    { label: t.roi,      href: '/roi' },
    { label: t.referral, href: '/referral' },
    { label: t.investor, href: '/investor' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── Navbar Bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-navy/85 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded bg-primary/10 border border-primary/30 flex items-center justify-center text-sm">
              🛡️
            </div>
            <span className="font-syne font-extrabold text-white text-base tracking-[0.15em] group-hover:text-primary transition-colors">
              V-GUARD
            </span>
            <span className="hidden sm:block font-mono text-[10px] text-primary/60 tracking-widest border-l border-white/10 pl-2.5">
              AI
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-mono text-[11px] tracking-[0.12em] px-3.5 py-2 rounded transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/8'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1px] bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-gray-400 hover:text-primary border border-white/10 hover:border-primary/40 px-3 py-1.5 rounded transition-all duration-200"
            >
              <span className="text-sm">{lang === 'id' ? '🇮🇩' : '🇬🇧'}</span>
              <span className="tracking-widest">{lang === 'id' ? 'ID' : 'EN'}</span>
            </button>

            {/* Admin Portal CTA */}
            <Link
              href="/admin"
              className="font-mono text-[11px] tracking-widest font-bold bg-primary text-navy hover:bg-primary/90 px-4 py-2 rounded transition-all duration-200 hidden sm:block"
            >
              {t.adminPortal}
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle Menu"
            >
              <span className={`block w-5 h-[1.5px] bg-gray-400 transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-gray-400 transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-gray-400 transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
          <div
            className="absolute top-16 left-0 right-0 bg-card border-b border-white/10 px-5 py-4"
            onClick={e => e.stopPropagation()}
          >
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block font-mono text-xs tracking-widest py-3 border-b border-white/5 transition-colors ${
                  isActive(item.href) ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-4">
              <button
                onClick={() => { toggleLang(); setMobileOpen(false); }}
                className="font-mono text-xs text-gray-400 border border-white/10 px-3 py-2 rounded flex-1"
              >
                {lang === 'id' ? '🇮🇩 Bahasa ID' : '🇬🇧 English EN'}
              </button>
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="font-mono text-xs font-bold bg-primary text-navy px-4 py-2 rounded flex-1 text-center"
              >
                {t.adminPortal}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
