"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  activeTab: string;
};

export default function FeaturesSection({ activeTab }: Props) {
  const { t } = useLanguage();

  const renderContent = () => {
    switch (activeTab) {
      case "produk":
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {t.beranda.features.map((f: any, i: number) => (
              <div
                key={i}
                className="p-6 bg-card rounded-xl border border-cyan-500/10 card-hover"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="text-lg font-semibold text-cyan-400">
                  {f.title}
                </h3>
                <p className="text-white/70 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        );

      case "roi":
        return (
          <div className="text-center">
            <h2 className="text-2xl text-cyan-400 mb-2">
              {t.roi.title}
            </h2>
            <p className="text-white/70">{t.roi.subtitle}</p>
          </div>
        );

      case "harga":
        return (
          <div className="text-center">
            <h2 className="text-2xl text-cyan-400 mb-2">
              {t.harga.title}
            </h2>
            <p className="text-white/70">{t.harga.subtitle}</p>
          </div>
        );

      case "admin":
        return (
          <div className="text-center text-red-400">
            🔒 Admin Portal Access
          </div>
        );

      default:
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">
              {t.beranda.title1} <br /> {t.beranda.title2}
            </h1>
            <p className="text-white/70">{t.beranda.subtitle}</p>
          </div>
        );
    }
  };

  return (
    <section className="pt-28 px-4 max-w-7xl mx-auto">

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

    </section>
  );
}
