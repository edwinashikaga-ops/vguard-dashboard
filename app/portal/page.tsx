'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import SentinelCS from '../../components/SentinelCS'

// ============================================================
// DATA
// ============================================================

const CLIENT_DB: Record<string, { name: string; tier: string; store: string }> = {
  'VG-2025': { name: 'Erwin Sinaga', tier: 'V-PRO', store: 'Toko Berkah' },
  'VG-DEMO': { name: 'Demo User', tier: 'V-LITE', store: 'Demo Store' },
  'VG-ADMIN': { name: 'Administrator', tier: 'V-ULTRA', store: 'V-Guard HQ' },
}

// ============================================================
// LOGIN
// ============================================================

function LoginScreen({ onLogin }: { onLogin: (id: string) => void }) {
  const [clientId, setClientId] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleLogin = () => {
    setLoading(true)
    setError('')
    setTimeout(() => {
      if (CLIENT_DB[clientId.toUpperCase()]) {
        onLogin(clientId.toUpperCase())
      } else {
        setError('Client ID tidak ditemukan. Coba: VG-2025 atau VG-DEMO')
      }
      setLoading(false)
    }, 800)
  }
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-3xl mx-auto mb-4 shadow-2xl shadow-cyan-500/30">V</div>
          <h1 className="text-2xl font-black text-white">V-GUARD Portal</h1>
          <p className="text-white/40 text-sm mt-1">AI Intelligence Dashboard v5.0</p>
        </div>
        <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8">
          <div className="mb-4">
            <label className="text-white/60 text-sm block mb-2">Client ID</label>
            <input
              type="text"
              placeholder="Contoh: VG-2025"
              value={clientId}
              onChange={e => setClientId(e.target.value.toUpperCase())}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-cyan-500/50 placeholder-white/20"
            />
          </div>
          {error && <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">⚠️ {error}</div>}
          <button onClick={handleLogin} disabled={loading || !clientId}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed mb-4">
            {loading ? '⏳ Memverifikasi...' : '🔐 Masuk Portal'}
          </button>
          <div className="p-4 bg-white/3 rounded-xl border border-white/5">
            <div className="text-white/30 text-xs text-center mb-3">Demo Access — Klik untuk pilih:</div>
            <div className="flex gap-2 flex-wrap justify-center">
              {Object.keys(CLIENT_DB).map(id => (
                <button key={id} onClick={() => setClientId(id)}
                  className="text-xs font-mono bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-cyan-400 hover:bg-white/10 transition-all">{id}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/" className="text-white/30 text-sm hover:text-cyan-400 transition-colors">← Kembali ke Beranda</Link>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// CLIENT DASHBOARD
// ============================================================

function ClientDashboard({ client }: { client: { name: string; tier: string; store: string } }) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [])

  const kasirList = [
    { name: 'Kasir 01', risk: 'Risiko Tinggi', pct: 83, color: 'bg-red-500' },
    { name: 'Kasir 02', risk: 'Risiko Sedang', pct: 56, color: 'bg-amber-500' },
    { name: 'Kasir 03', risk: 'Aman', pct: 21, color: 'bg-emerald-500' },
    { name: 'Kasir 04', risk: 'Aman', pct: 18, color: 'bg-emerald-500' },
    { name: 'Kasir 05', risk: 'Aman', pct: 12, color: 'bg-emerald-500' },
  ]
  const alerts = [
    { title: 'Transaksi Anomali', desc: 'Kasir 01 - Void berulang', value: 'Rp 350.000', time: '10:24', icon: '⚠️' },
    { title: 'Diskon Tidak Wajar', desc: 'Kasir 02 - Diskon 99%', value: 'Rp 250.000', time: '09:15', icon: '🔴' },
    { title: 'Refund Abnormal', desc: 'Kasir 03 - Refund ganda', value: 'Rp 450.000', time: '08:42', icon: '🔶' },
  ]
  const transactions = [
    { time: '10:24', kasir: 'Kasir 01', jenis: 'Penjualan', status: 'Normal', nilai: 'Rp 125.000' },
    { time: '10:15', kasir: 'Kasir 02', jenis: 'Void', status: 'Anomali', nilai: 'Rp 250.000' },
    { time: '10:08', kasir: 'Kasir 03', jenis: 'Diskon', status: 'Anomali', nilai: 'Rp 75.000' },
    { time: '10:05', kasir: 'Kasir 04', jenis: 'Refund', status: 'Anomali', nilai: 'Rp 450.000' },
    { time: '09:58', kasir: 'Kasir 05', jenis: 'Penjualan', status: 'Normal', nilai: 'Rp 410.000' },
  ]
  const connections = ['MOKA', 'QRIS', 'EDC', 'SAP', 'iReap']

  return (
    <div className="space-y-5">
      {/* Welcome */}
      <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-white/40 text-xs mb-1">Selamat datang,</div>
          <div className="text-white font-bold text-lg">{client.name}</div>
          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <span className="text-xs font-mono bg-white/5 border border-white/10 rounded-lg px-2 py-0.5 text-cyan-400">ID: VG-2025</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${
              client.tier === 'V-LITE' ? 'from-slate-500 to-slate-700' :
              client.tier === 'V-PRO' ? 'from-cyan-500 to-blue-600' :
              client.tier === 'V-ADVANCE' ? 'from-blue-500 to-indigo-600' :
              client.tier === 'V-ELITE' ? 'from-violet-500 to-purple-700' :
              'from-amber-400 to-orange-600'
            }`}>{client.tier}</span>
            <span className="text-white/40 text-xs">🏪 {client.store}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white font-mono text-2xl font-bold">{time}</div>
          <div className="text-white/30 text-xs">WIB</div>
          <div className="flex items-center gap-1.5 mt-1 justify-end">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>

      {/* Connections */}
      <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
        <div className="text-white/30 text-xs uppercase tracking-wider mb-3">Koneksi Status</div>
        <div className="flex flex-wrap gap-2">
          {connections.map(c => (
            <div key={c} className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 font-bold text-sm">{c}</span>
              <span className="text-emerald-400/50 text-xs">● Connected</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Transaksi', value: '5.234', change: '+15%', color: 'text-cyan-400' },
          { label: 'Kerugian Dicegah', value: 'Rp 18.750.000', change: '+12%', color: 'text-emerald-400' },
          { label: 'Kasir Aktif', value: '15', change: '', color: 'text-white' },
          { label: 'Sistem Aktif', value: 'ONLINE', change: '', color: 'text-emerald-400' },
        ].map(s => (
          <div key={s.label} className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-white/40 text-xs mb-2">{s.label}</div>
            <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
            {s.change && <div className="text-emerald-400 text-xs mt-1">↑ {s.change}</div>}
          </div>
        ))}
      </div>

      {/* Table + Alerts */}
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-black/30 border border-white/5 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white font-bold">Transaksi Terakhir</div>
            <button className="text-cyan-400 text-xs hover:underline">Lihat Semua</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="text-white/30 text-xs border-b border-white/5">
                {['Waktu', 'Kasir', 'Jenis', 'Status', 'Nilai'].map(h => <th key={h} className={`pb-2 ${h === 'Nilai' ? 'text-right' : 'text-left'}`}>{h}</th>)}
              </tr></thead>
              <tbody className="divide-y divide-white/5">
                {transactions.map((tx, i) => (
                  <tr key={i} className="text-sm">
                    <td className="py-2.5 text-white/40 font-mono text-xs">{tx.time}</td>
                    <td className="py-2.5 text-white/70">{tx.kasir}</td>
                    <td className="py-2.5 text-white/70">{tx.jenis}</td>
                    <td className="py-2.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${tx.status === 'Normal' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>{tx.status}</span>
                    </td>
                    <td className="py-2.5 text-white/70 text-right">{tx.nilai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white font-bold">Alert Terbaru</div>
            <button className="text-cyan-400 text-xs hover:underline">Lihat Semua</button>
          </div>
          <div className="flex flex-col gap-3">
            {alerts.map((a, i) => (
              <div key={i} className="bg-red-500/5 border border-red-500/15 rounded-xl p-3">
                <div className="flex items-start gap-2">
                  <span>{a.icon}</span>
                  <div className="flex-1">
                    <div className="text-white text-xs font-semibold">{a.title}</div>
                    <div className="text-white/40 text-xs">{a.desc}</div>
                    <div className="text-red-400 text-xs font-bold mt-1">{a.value}</div>
                  </div>
                  <span className="text-white/25 text-xs">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kasir Activity */}
      <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white font-bold">Aktivitas Kasir</div>
          <button className="text-cyan-400 text-xs hover:underline">Lihat Semua</button>
        </div>
        <div className="flex flex-col gap-3">
          {kasirList.map((k, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-20 text-white/60 text-sm flex-shrink-0">{k.name}</div>
              <div className="flex-1 bg-white/5 rounded-full h-2">
                <div className={`h-2 rounded-full transition-all ${k.color}`} style={{ width: `${k.pct}%` }} />
              </div>
              <div className={`text-xs w-24 text-right font-semibold flex-shrink-0 ${k.risk === 'Risiko Tinggi' ? 'text-red-400' : k.risk === 'Risiko Sedang' ? 'text-amber-400' : 'text-emerald-400'}`}>{k.risk}</div>
              <div className="text-white/40 text-xs w-8 text-right flex-shrink-0">{k.pct}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Kerugian Dicegah', value: 'Rp 2.350.000.000', sub: 'Sepanjang waktu', color: 'text-emerald-400' },
          { label: 'Toko Aktif', value: '127+', sub: 'Bergabung bersama kami', color: 'text-cyan-400' },
          { label: 'Kasir Dimonitor', value: '532', sub: 'Online 24/7', color: 'text-blue-400' },
          { label: 'Akurasi Sistem', value: '98.7%', sub: 'Sistem Akurat & Efektif', color: 'text-violet-400' },
        ].map(s => (
          <div key={s.label} className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-white/40 text-xs mb-2">{s.label}</div>
            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-white/25 text-xs mt-1">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// REFERRAL DASHBOARD
// ============================================================

function ReferralDashboard({ client }: { client: { name: string; tier: string; store: string } }) {
  const [agentName, setAgentName] = useState('erwin')
  const [copied, setCopied] = useState(false)
  const refUrl = `vguard.pro/ref/${agentName}`
  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${refUrl}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const referralList = [
    { name: 'Toko Berkah', paket: 'V-PRO', tanggal: '20 Mar 2025', status: 'Aktif', komisi: 'Rp 750.000' },
    { name: 'Mart Sejahtera', paket: 'V-ADVANCE', tanggal: '18 Mar 2025', status: 'Aktif', komisi: 'Rp 3.500.000' },
    { name: 'Superindis Mini', paket: 'V-PRO', tanggal: '15 Mar 2025', status: 'Aktif', komisi: 'Rp 750.000' },
    { name: 'IndoMart Point', paket: 'V-PRO', tanggal: '10 Mar 2025', status: 'Pending', komisi: 'Rp 750.000' },
  ]
  const barData = [45, 78, 55, 90, 65, 88, 72]

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Referral', value: '28', sub: '+9%', color: 'text-cyan-400' },
          { label: 'Komisi Pending', value: 'Rp 4.250.000', color: 'text-amber-400' },
          { label: 'Komisi Dibayar', value: 'Rp 12.750.000', color: 'text-emerald-400' },
          { label: 'Total Komisi', value: 'Rp 17.000.000', color: 'text-violet-400' },
        ].map(s => (
          <div key={s.label} className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-white/40 text-xs mb-2">{s.label}</div>
            <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
            {s.sub && <div className="text-emerald-400 text-xs mt-1">↑ {s.sub}</div>}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-6">
          <div className="text-white font-bold mb-1">Link Referral Anda</div>
          <div className="text-white/40 text-xs mb-5">Generate link untuk agent/klien baru</div>
          <div className="mb-4">
            <label className="text-white/40 text-xs block mb-2">Nama Toko / Agent</label>
            <input type="text" value={agentName} onChange={e => setAgentName(e.target.value.toLowerCase().replace(/\s/g, '-'))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50" />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">{refUrl}</span>
          </div>
          <div className="flex gap-3 mb-5">
            <button onClick={handleCopy} className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all">
              {copied ? '✓ Copied!' : '📋 Copy Link'}
            </button>
            <a href={`https://wa.me/?text=Lindungi bisnis Anda dengan V-Guard AI! https://${refUrl}`} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold text-center hover:opacity-90 transition-all">
              📤 Share WA
            </a>
          </div>
          <div className="border-t border-white/10 pt-4">
            <div className="text-white/30 text-xs uppercase tracking-wider mb-3">Komisi per Paket (10% Setup Fee)</div>
            <div className="flex flex-col gap-2">
              {[
                { tier: 'V-LITE', komisi: 'Rp 25rb', locked: false },
                { tier: 'V-PRO', komisi: 'Rp 75rb', locked: false },
                { tier: 'V-ADVANCE', komisi: 'Rp 350rb', locked: false },
                { tier: 'V-ELITE', komisi: 'Rp 1jt', locked: true },
                { tier: 'V-ULTRA', komisi: 'Rp 3.5jt', locked: true },
              ].map(t => (
                <div key={t.tier} className={`flex items-center justify-between text-sm ${t.locked ? 'opacity-35' : ''}`}>
                  <span className="text-white/50">{t.tier}</span>
                  <span className={`font-bold ${t.locked ? 'text-white/20' : 'text-cyan-400'}`}>{t.locked ? '🔒 ' : ''}{t.komisi}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
            <div className="text-white font-bold mb-4">Performance Referral</div>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[{ label: 'Rata Konversi', value: '65%' }, { label: 'Customer Aktif', value: '24' }, { label: 'Pendapatan/Customer', value: 'Rp 708.333' }].map(p => (
                <div key={p.label} className="text-center">
                  <div className="text-xl font-black text-cyan-400">{p.value}</div>
                  <div className="text-white/30 text-xs mt-1">{p.label}</div>
                </div>
              ))}
            </div>
            <div className="text-white/30 text-xs mb-2">Komisi 7 Hari Terakhir</div>
            <div className="flex items-end gap-1 h-16">
              {barData.map((v, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t opacity-80 hover:opacity-100 transition-all" style={{ height: `${v}%` }} />
              ))}
            </div>
            <div className="flex justify-between text-white/20 text-[10px] mt-1">
              {['18', '19', '20', '21', '22', '23', '24'].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
          <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
            <div className="text-white/40 text-xs mb-1">Ranking Anda</div>
            <div className="text-4xl font-black text-amber-400">#3 Top Agent</div>
            <div className="text-white/30 text-xs mt-1">Dari 156 agent aktif bulan ini</div>
          </div>
          <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-white/40 text-xs mb-1">Link Referral Anda</div>
            <div className="text-cyan-400 font-mono text-xs mb-2">https://{refUrl}</div>
            <a href={`https://wa.me/?text=https://${refUrl}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-lg px-3 py-1.5 hover:bg-emerald-500/30 transition-all">
              📤 Salin Link
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
        <div className="text-white font-bold mb-4">Daftar Referral</div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="text-white/30 text-xs border-b border-white/5">
              {['Nama Klien', 'Paket', 'Tanggal', 'Status', 'Komisi'].map(h => <th key={h} className={`pb-2 ${h === 'Komisi' ? 'text-right' : 'text-left'}`}>{h}</th>)}
            </tr></thead>
            <tbody className="divide-y divide-white/5">
              {referralList.map((r, i) => (
                <tr key={i} className="text-sm">
                  <td className="py-3 text-white/70">{r.name}</td>
                  <td className="py-3"><span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full font-semibold">{r.paket}</span></td>
                  <td className="py-3 text-white/40 text-xs">{r.tanggal}</td>
                  <td className="py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.status === 'Aktif' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.status}</span></td>
                  <td className="py-3 text-cyan-400 font-bold text-right">{r.komisi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// INVESTOR DASHBOARD
// ============================================================

function InvestorDashboard() {
  const mrrData = [30, 45, 52, 61, 75, 88, 105, 120, 140, 158, 180, 210]
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']
  const returns = [
    { tanggal: '24 Mei 2025', ret: 'Rp 5.200.000', yield_: '1.02%' },
    { tanggal: '17 Mei 2025', ret: 'Rp 5.100.000', yield_: '1.02%' },
    { tanggal: '10 Mei 2025', ret: 'Rp 4.900.000', yield_: '0.99%' },
    { tanggal: '03 Mei 2025', ret: 'Rp 4.800.000', yield_: '0.96%' },
  ]
  const roadmap = [
    { phase: 'Q1 2025', title: 'Launch Phase', desc: 'V-Lite & V-Pro Release', status: 'done' },
    { phase: 'Q2 2025', title: 'Growth Phase', desc: 'V-Advance & V-Elite', status: 'done' },
    { phase: 'Q3 2025', title: 'Scale Phase', desc: 'V-Ultra & Enterprise', status: 'active' },
    { phase: 'Q4 2025', title: 'Expansion', desc: 'Regional + White Label', status: 'upcoming' },
  ]

  return (
    <div className="space-y-5">
      <div className="bg-black/30 border border-violet-500/30 rounded-2xl p-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-xl">💎</div>
        <div>
          <div className="text-white font-black text-lg">War Room — Investor Area</div>
          <div className="text-white/40 text-xs">V-Guard AI Intelligence v5.0 — Confidential</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Investasi', value: 'Rp 500.000.000', color: 'text-white' },
          { label: 'Return Saat Ini', value: 'Rp 67.500.000', color: 'text-emerald-400' },
          { label: 'Yield Saat Ini', value: '13.5%', color: 'text-cyan-400' },
          { label: 'Status Investasi', value: 'Aktif', color: 'text-emerald-400' },
        ].map(m => (
          <div key={m.label} className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-white/40 text-xs mb-2">{m.label}</div>
            <div className={`text-lg font-black ${m.color}`}>{m.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-black/30 border border-white/5 rounded-2xl p-6">
          <div className="text-white font-bold mb-4">Performa Investasi</div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Total Investor', value: '156' },
              { label: 'Total AUM', value: 'Rp 2.450.000.000' },
              { label: 'ROI Rata-rata', value: '13.2%' },
              { label: 'Growth Bulanan', value: '8.7%' },
            ].map(f => (
              <div key={f.label} className="bg-white/5 rounded-xl p-3">
                <div className="text-white/40 text-xs mb-1">{f.label}</div>
                <div className="text-white font-bold text-sm">{f.value}</div>
              </div>
            ))}
          </div>
          <div className="text-white/30 text-xs uppercase tracking-wider mb-3">Proyeksi MRR 2025 (juta Rupiah)</div>
          <div className="flex items-end gap-1 h-24">
            {mrrData.map((v, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-violet-600 to-purple-400 rounded-t opacity-80 hover:opacity-100 transition-all group relative"
                style={{ height: `${(v / 210) * 100}%` }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-white text-[8px] opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">{v}jt</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-white/20 text-[9px] mt-1">
            {months.map(m => <span key={m}>{m}</span>)}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-white/40 text-xs">Performa Portfolio</span>
            <span className="text-emerald-400 font-bold text-sm">12.5% ↑</span>
          </div>
          <div className="mt-2 bg-white/5 rounded-full h-2">
            <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500" style={{ width: '72%' }} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
            <div className="text-white font-bold mb-4">Key Business Metrics</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'TAM (Market Size)', value: 'Rp 45T', desc: 'UMKM Indonesia' },
                { label: 'CAC', value: 'Rp 150rb', desc: 'Per customer' },
                { label: 'LTV', value: 'Rp 3.6jt', desc: '24 bulan avg' },
                { label: 'Gross Margin', value: '78%', desc: 'SaaS baseline' },
              ].map(m => (
                <div key={m.label} className="bg-white/5 rounded-xl p-3">
                  <div className="text-white/40 text-xs">{m.label}</div>
                  <div className="text-violet-400 font-black text-xl mt-1">{m.value}</div>
                  <div className="text-white/25 text-xs">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
            <div className="text-white font-bold mb-4">Roadmap v5.0</div>
            <div className="flex flex-col gap-4">
              {roadmap.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 ${r.status === 'done' ? 'bg-emerald-400' : r.status === 'active' ? 'bg-cyan-400 animate-pulse' : 'bg-white/20'}`} />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono text-white/30">{r.phase}</span>
                      {r.status === 'done' && <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">✓ DONE</span>}
                      {r.status === 'active' && <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded-full">● IN PROGRESS</span>}
                    </div>
                    <div className="text-white text-sm font-semibold">{r.title}</div>
                    <div className="text-white/30 text-xs">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
        <div className="text-white font-bold mb-4">Riwayat Return</div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="text-white/30 text-xs border-b border-white/5">
              {['Tanggal', 'Return', 'Yield', 'Status'].map(h => <th key={h} className="pb-2 text-left">{h}</th>)}
            </tr></thead>
            <tbody className="divide-y divide-white/5">
              {returns.map((r, i) => (
                <tr key={i} className="text-sm">
                  <td className="py-2.5 text-white/40">{r.tanggal}</td>
                  <td className="py-2.5 text-emerald-400 font-bold">{r.ret}</td>
                  <td className="py-2.5 text-cyan-400">{r.yield_}</td>
                  <td className="py-2.5"><span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">Dibayarkan</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// PORTAL DASHBOARD SHELL
// ============================================================

function PortalDashboard({ clientId, onLogout }: { clientId: string; onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('client')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const client = CLIENT_DB[clientId]

  const sidebarNav = [
    { id: 'client', label: 'Dashboard', icon: '📊' },
    { id: 'client', label: 'Transaksi', icon: '💳' },
    { id: 'client', label: 'Kasir', icon: '🖥️' },
    { id: 'client', label: 'Monitoring', icon: '👁️' },
    { id: 'client', label: 'Laporan', icon: '📋' },
    { id: 'client', label: 'Notifikasi', icon: '🔔' },
    { id: 'client', label: 'Produk', icon: '📦' },
    { id: 'client', label: 'Setting', icon: '⚙️' },
    { id: 'referral', label: 'Referral Program', icon: '🤝' },
  ]

  const tabs = [
    { id: 'client', label: 'Dashboard Klien', icon: '📊' },
    { id: 'referral', label: 'Referral Agent', icon: '🤝' },
    { id: 'investor', label: 'Investor Area', icon: '💎' },
  ]

  return (
    <div className="min-h-screen bg-[#020617] flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-52' : 'w-14'} flex-shrink-0 bg-black/50 border-r border-white/5 flex flex-col transition-all duration-300 sticky top-0 h-screen`}>
        <div className="px-3 py-5 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0">V</div>
          {sidebarOpen && <div><div className="text-white font-black text-sm">V-GUARD</div><div className="text-cyan-400 text-[9px] tracking-widest uppercase">Security</div></div>}
        </div>
        <nav className="flex-1 py-3 overflow-y-auto">
          {sidebarNav.map((item, i) => (
            <button key={i} onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all hover:bg-white/5 ${activeTab === item.id && item.id !== 'client' ? 'bg-cyan-500/10 text-cyan-400' : 'text-white/40'}`}>
              <span className="text-base flex-shrink-0">{item.icon}</span>
              {sidebarOpen && <span className="text-xs">{item.label}</span>}
            </button>
          ))}
          <button onClick={() => setActiveTab('investor')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all hover:bg-white/5 ${activeTab === 'investor' ? 'bg-violet-500/10 text-violet-400' : 'text-white/40'}`}>
            <span className="text-base flex-shrink-0">💎</span>
            {sidebarOpen && <span className="text-xs">Investor Area</span>}
          </button>
        </nav>
        {sidebarOpen && (
          <div className="p-3 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{client.name.charAt(0)}</div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-semibold truncate">{client.name}</div>
                <div className="text-white/30 text-[10px]">{client.tier}</div>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white/40 hover:text-white transition-colors text-xl leading-none">☰</button>
            <div className="flex gap-1.5 flex-wrap">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? tab.id === 'investor' ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}>
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>
          <button onClick={onLogout} className="text-white/30 hover:text-red-400 text-xs transition-colors flex-shrink-0">← Logout</button>
        </header>
        <main className="flex-1 p-5 overflow-auto">
          {activeTab === 'client' && <ClientDashboard client={client} />}
          {activeTab === 'referral' && <ReferralDashboard client={client} />}
          {activeTab === 'investor' && <InvestorDashboard />}
        </main>
      </div>
    </div>
  )
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function PortalPage() {
  const [clientId, setClientId] = useState<string | null>(null)
  return (
    <>
      {clientId
        ? <PortalDashboard clientId={clientId} onLogout={() => setClientId(null)} />
        : <LoginScreen onLogin={setClientId} />
      }
      <SentinelCS />
    </>
  )
}
