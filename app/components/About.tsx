export function About({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="sticky top-24">
            <div className="text-emerald-500 text-sm tracking-[3px] font-semibold mb-3">CHAPTER 01</div>
            <h2 className="text-6xl font-semibold tracking-tighter">{data.title}</h2>
          </div>
        </div>
        <div className="md:col-span-7 text-[17px] leading-relaxed text-zinc-300 space-y-6">
          {data.content?.map((block: any, index: number) => (
            <p key={index}>{block.children?.[0]?.text}</p>
          ))}
        </div>
      </div>
    </section>
  )
}