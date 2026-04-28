'use client'

import { useState } from 'react'

const QUICK_REPLIES = [
  { label: '🛡️ Tentang V-Guard', response: 'V-Guard AI adalah sistem keamanan bisnis berbasis AI yang mendeteksi fraud, void, dan anomali transaksi secara real-time. Kami melindungi kasir, stok, dan rekening bank Anda 24/7 dengan 10 Agent AI elite.' },
  { label: '📦 Pilih Paket UMKM', response: 'Untuk UMKM, kami rekomendasikan:\n• V-LITE: Rp 150rb/bln (1 kasir)\n• V-PRO: Rp 450rb/bln (5 kasir + WhatsApp Alert)\n\nMulai dengan V-LITE gratis 14 hari! Klik "Daftar Aktivasi" di halaman utama.' },
  { label: '📊 Hitung ROI', response: 'Contoh: Omzet Rp 50jt/bln dengan kebocoran 3% = Rp 1.5jt hilang. V-Guard mencegah 88% = Rp 1.32jt diselamatkan. ROI vs biaya V-LITE Rp 150rb = 780% per bulan! 🚀' },
  { label: '📅 Book Demo', response: 'Untuk book demo gratis, hubungi kami:\n📱 WhatsApp: 0812-3456-7890\n📧 Email: hello@vguard.pro\n\nTim kami siap membantu dalam 2 jam kerja!' },
]

export default function SentinelCS() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string }[]>([
    { from: 'bot', text: 'Halo! Saya Sentinel CS 🛡️\n\nAda yang bisa saya bantu tentang V-Guard AI?' }
  ])

  const handleQuickReply = (reply: typeof QUICK_REPLIES[0]) => {
    setMessages(prev => [
      ...prev,
      { from: 'user', text: reply.label },
      { from: 'bot', text: reply.response }
    ])
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {open && (
        <div className="mb-4 w-80 bg-[#0a1628] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-b border-white/5 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-sm">🛡️</div>
            <div className="flex-1">
              <div className="text-white font-bold text-sm">Sentinel CS</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs">Online — Siap membantu</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white text-xl leading-none transition-colors">×</button>
          </div>

          <div className="p-4 max-h-60 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-line ${
                  msg.from === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/5 border border-white/10 text-white/80'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-white/5">
            <div className="text-white/25 text-[10px] uppercase tracking-wider mb-2">Pilihan Cepat</div>
            <div className="flex flex-col gap-1.5">
              {QUICK_REPLIES.map((qr, i) => (
                <button key={i} onClick={() => handleQuickReply(qr)}
                  className="text-left text-xs text-cyan-400 border border-cyan-500/20 rounded-xl px-3 py-2 hover:bg-cyan-500/10 transition-all">
                  {qr.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl shadow-2xl shadow-cyan-500/30 hover:scale-110 transition-all flex items-center justify-center">
        {open ? '✕' : '🛡️'}
      </button>
    </div>
  )
}
