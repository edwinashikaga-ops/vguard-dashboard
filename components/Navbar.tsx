"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Navbar({ activeTab, setActiveTab }: Props) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 ROLE SIMULATION (ubah di sini)
  const userRole: "admin" | "guest" = "guest";
  // ganti ke "admin" untuk tampilkan Admin Portal

  const navItems = [
    { key: "beranda", label: t.nav.beranda },
    { key: "produk", label: "Produk" }, // belum ada di translations → manual dulu
    { key: "roi", label: t.nav.roi },
    { key: "harga", label: t.nav.harga },
    { key: "referral", label: t.nav.referral },
    { key: "investor", label: t.nav.investor },
  ];

  if (userRole === "admin") {
    navItems.push({
      key: "admin",
      label: t.nav.adminPortal,
    });
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#020617]/70 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-xl font-bold text-cyan-400">
          V-GUARD
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`transition ${
                activeTab === item.key
                  ? "text-cyan-400"
                  : "text-white/70 hover:text-cyan-300"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* CTA */}
          <a
            href="https://wa.me/6282122190885"
            target="_blank"
            className="bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold hover:opacity-80"
          >
            CS 24/7
          </a>
        </div>

        {/* MOBILE BTN */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-[#020617]/90">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveTab(item.key);
                setIsOpen(false);
              }}
              className="text-left text-white/80 hover:text-cyan-400"
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://wa.me/6282122190885"
            target="_blank"
            className="bg-cyan-400 text-black px-4 py-2 rounded-md text-center"
          >
            CS 24/7
          </a>
        </div>
      )}
    </nav>
  );
}
