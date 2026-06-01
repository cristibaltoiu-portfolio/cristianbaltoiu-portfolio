export function Education({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800">
      <div className="mb-16">
        <div className="text-emerald-500 text-sm tracking-[3px] font-semibold mb-3">CHAPTER 04</div>
        <h2 className="text-6xl font-semibold tracking-tighter">Education</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((edu, index) => (
          <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-emerald-400 text-xs font-mono tracking-widest mb-2">{edu.type}</div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">{edu.title}</h3>
            <div className="text-zinc-400">{edu.institution}</div>
            <div className="text-sm text-zinc-500 mt-1">{edu.period}</div>
          </div>
        ))}
      </div>
    </section>
  )
}