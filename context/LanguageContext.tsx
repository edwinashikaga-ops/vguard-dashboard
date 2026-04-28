'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/lib/translations'; // 🔥 tambah ini
import type { Lang } from '@/lib/translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: typeof translations['id']; // 🔥 tambah ini
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang], // 🔥 ini yang bikin Navbar jalan
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside <LanguageProvider>');
  }
  return ctx;
}
