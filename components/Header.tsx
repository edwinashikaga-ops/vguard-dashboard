'use client'

export default function Header({ onOpenROI }: any) {
  return (
    <div className="flex flex-col items-center py-6 border-b border-[#00d4ff]/20">

      {/* LOGO */}
      <div className="w-20 h-20 rounded-full bg-[#00d4ff]/10 flex items-center justify-center animate-pulse shadow-[0_0_30px_#00d4ff]">
        <span className="text-3xl font-bold text-[#00d4ff]">V</span>
      </div>

      <h1 className="mt-2 text-[#00d4ff] tracking-widest font-bold">
        V-GUARD
      </h1>

      {/* MENU */}
      <div className="flex gap-6 mt-4 text-sm text-zinc-400">
        <button onClick={onOpenROI}>ROI Calculator</button>
        <a href="#">Support 24/7</a>
        <a href="#">Referral Network</a>
      </div>

    </div>
  )
}
