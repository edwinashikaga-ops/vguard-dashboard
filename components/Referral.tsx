'use client'

import { useState } from 'react'

export default function Referral() {

  const [username, setUsername] = useState('erwin')

  const link = `vguard.pro/ref/${username}`

  return (
    <div className="border border-[#00d4ff]/20 p-4 rounded-xl">

      <h2 className="text-[#00d4ff] mb-4">Referral Network</h2>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full bg-black p-2 text-sm mb-2"
      />

      <div className="text-xs text-zinc-400 mb-3">{link}</div>

      <button
        onClick={() => navigator.clipboard.writeText(link)}
        className="bg-[#00d4ff] text-black px-3 py-1 text-xs mr-2"
      >
        Copy
      </button>

      <button
        onClick={() => window.open(`https://wa.me/?text=${link}`)}
        className="bg-green-500 px-3 py-1 text-xs"
      >
        Share WA
      </button>

      <div className="mt-4 text-sm text-zinc-400">
        Komisi: Rp 2.500.000
      </div>

    </div>
  )
}
