{/* 6-column grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {t.features.map((feat, i) => (
    <div
      key={i}
      className={`group card-hover border border-white/6 bg-card rounded-xl p-6 cursor-default animate-slide-up stagger-${Math.min(i + 1, 6)}`}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
        {feat.icon === 'Shield' && <Shield size={22} className="text-primary" />}
        {feat.icon === 'BarChart' && <BarChart size={22} className="text-primary" />}
        {feat.icon === 'Zap' && <Zap size={22} className="text-primary" />}
      </div>

      {/* Judul Fitur - Sudah diperbarui sesuai instruksi Bapak */}
      <h3 className="font-syne font-bold text-white text-[15px] mb-2 tracking-wide">
        {feat.title}
      </h3>

      {/* Deskripsi Fitur - Sudah diperbarui sesuai instruksi Bapak */}
      <p className="font-mono text-[11px] text-gray-500 leading-relaxed">
        {feat.desc}
      </p>

      {/* Accent line on hover */}
      <div className="mt-5 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full" />
    </div>
  ))}
</div>