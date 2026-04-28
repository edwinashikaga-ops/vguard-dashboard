"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  activeTab: string;
};

export default function FeaturesSection({ activeTab }: Props) {
  const { t } = useLanguage();

  const productFeatures = [
    {
      title: t.features.ai,
      desc: t.features.ai_desc,
    },
    {
      title: t.features.network,
      desc: t.features.network_desc,
    },
    {
      title: t.features.behavior,
      desc: t.features.behavior_desc,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "produk":
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {productFeatures.map((f, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-xl border border-cyan-500/10 card-hover"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
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
            <p className="text-white/70">{t.roi.desc}</p>
          </div>
        );

      case "portal":
        return (
          <div className="text-center">
            <h2 className="text-2xl text-cyan-400 mb-2">
              {t.portal.title}
            </h2>
            <p className="text-white/70">{t.portal.desc}</p>
          </div>
        );

      case "admin":
        return (
          <div className="text-center">
            <h2 className="text-red-400 text-xl">
              Admin Dashboard Access
            </h2>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <h2 className="text-3xl text-cyan-400 mb-4">
              {t.hero.title}
            </h2>
            <p className="text-white/70">{t.hero.subtitle}</p>
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
