'use client'

import { useState } from 'react'

export default function ROIModal({ onClose }: any) {

  const [omzet, setOmzet] = useState(0)

  const loss = omzet * 0.05

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">

      <div className="bg-[#020617] p-6 border border-[#00d4ff]/20 rounded-xl w-80">

        <h2 className="text-[#00d4ff] mb-4">ROI Calculator</h2>

        <input
          type="number"
          placeholder="Omzet Bulanan"
          onChange={(e) => setOmzet(Number(e.target.value))}
          className="w-full p-2 bg-black mb-3"
        />

        <p className="text-sm text-zinc-400">
          Estimasi Kebocoran: Rp {loss.toLocaleString()}
        </p>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-[#00d4ff] text-black py-2"
        >
          Tutup
        </button>

      </div>

    </div>
  )
}
