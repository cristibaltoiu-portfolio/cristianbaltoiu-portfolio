export function Experience({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800">
      <div className="mb-16">
        <div className="text-emerald-500 text-sm tracking-[3px] font-semibold mb-3">CHAPTER 03</div>
        <h2 className="text-6xl font-semibold tracking-tighter">Career Journey</h2>
      </div>

      <div className="space-y-12 max-w-3xl">
        {data.map((exp, index) => (
          <div key={index} className="flex gap-8">
            <div className="w-16 h-16 flex-shrink-0 bg-zinc-800 rounded-3xl flex items-center justify-center text-3xl">
              💼
            </div>
            <div className="flex-1 pt-1">
              <div className="font-semibold text-2xl">{exp.title}</div>
              <div className="text-emerald-400">{exp.company} • {exp.period}</div>
              <div className="mt-3 text-zinc-400">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}