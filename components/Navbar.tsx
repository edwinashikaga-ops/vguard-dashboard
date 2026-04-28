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

  // 🔥 ROLE SIMULATION (Sekarang menggunakan tipe string sesuai permintaan Bapak)
  const userRole: string = "guest"; 
  // Ganti menjadi "admin" untuk memunculkan Admin Portal

  const navItems = [
    { key: "beranda", label: t.nav.beranda },
    { key: "produk", label: t.nav.produk }, 
    { key: "roi", label: t.nav.roi },
    { key: "harga", label: t.nav.harga },
    { key: "referral", label: t.nav.referral },
    { key: "investor", label: t.nav.investor },
  ];

  // Logika pengecekan akses admin
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
        <div className="text-xl font-bold text-cyan-400 tracking-wider">
          V-GUARD
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`text-sm font-medium transition-all duration-300 ${
                activeTab === item.key
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-white/70 hover:text-cyan-300"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* CTA BUTTON */}
          <a
            href="https://wa.me/6282122190885"
            target="_blank"
            className="bg-cyan-400 text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-300 transition shadow-[0_0_15px_rgba(0,229,255,0.4)]"
          >
            CS 24/7
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 py-8 flex flex-col gap-5 bg-[#020617] border-b border-cyan-500/20 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveTab(item.key);
                setIsOpen(false);
              }}
              className={`text-lg text-left ${
                activeTab === item.key ? "text-cyan-400" : "text-white/80"
              }`}
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://wa.me/6282122190885"
            target="_blank"
            className="bg-cyan-400 text-black px-4 py-3 rounded-md text-center font-bold mt-4"
          >
            CS 24/7
          </a>
        </div>
      )}
    </nav>
  );
}