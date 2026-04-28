import { Lock } from 'lucide-react'

export default function Visionary({ tier, isGuest }: any) {

  const isLocked = tier === 'V-LITE' || tier === 'V-PRO'

  return (
    <div className="col-span-2 border border-[#00d4ff]/20 p-4 rounded-xl relative">

      <h2 className="text-[#00d4ff] mb-4">Visionary Module</h2>

      {/* LOCK LOGIC */}
      {isLocked ? (
        <div className="h-64 flex items-center justify-center bg-black/60 rounded-lg relative">
          <Lock className="text-[#00d4ff]" />
          <span className="ml-2 text-sm">Locked - Upgrade Required</span>
        </div>
      ) : (
        <div className="h-64 bg-black rounded-lg flex items-center justify-center text-zinc-500">
          CCTV MONITOR ACTIVE
        </div>
      )}

      {/* DEMO DATA */}
      {isGuest && (
        <div className="mt-4 text-xs text-zinc-400">
          Kerugian Dicegah Hari Ini: Rp 1.250.000
        </div>
      )}

    </div>
  )
}
