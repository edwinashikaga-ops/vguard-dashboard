import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Syne, Space_Mono } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "V-Guard | Cybersecurity Dashboard",
  description: "Protect your business with real-time cybersecurity monitoring",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="bg-navy text-white min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
