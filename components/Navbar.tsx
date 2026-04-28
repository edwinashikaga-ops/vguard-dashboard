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

  // 🔥 SIMULASI ROLE (ubah di sini untuk testing)
  const userRole: "admin" | "guest" = "guest";
  // ubah jadi "admin" untuk menampilkan menu Admin Access

  const navItems = [
    { key: "home", label: t.nav.home },
    { key: "produk", label: t.nav.product },
    { key: "roi", label: t.nav.roi },
    { key: "portal", label: t.nav.portal },
  ];

  if (userRole === "admin") {
    navItems.push({ key: "admin", label: t.nav.admin });
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#020617]/70 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-xl font-bold text-cyan-400">
          V-GUARD
        </div>

        {/* DESKTOP MENU */}
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
            href="https://wa.me/628123456789"
            target="_blank"
            className="bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold hover:opacity-80 transition"
          >
            {t.nav.cs}
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-[#020617]/90 backdrop-blur-xl">
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
            href="https://wa.me/628123456789"
            target="_blank"
            className="bg-cyan-400 text-black px-4 py-2 rounded-md text-center"
          >
            {t.nav.cs}
          </a>
        </div>
      )}
    </nav>
  );
}
