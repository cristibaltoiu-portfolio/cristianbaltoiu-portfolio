export function Skills({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800">
      <div className="mb-16 text-center">
        <div className="text-emerald-500 text-sm tracking-[3px] font-semibold mb-3">CHAPTER 06</div>
        <h2 className="text-6xl font-semibold tracking-tighter">Core Expertise</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {data.map((skill, index) => (
          <div 
            key={index} 
            className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-700 rounded-3xl text-sm transition-all hover:scale-105 cursor-default"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}