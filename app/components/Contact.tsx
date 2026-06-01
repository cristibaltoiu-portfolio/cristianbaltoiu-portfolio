export function Contact({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center border-t border-zinc-800">
      <div className="mb-12">
        <div className="text-emerald-500 text-sm tracking-[3px] font-semibold mb-3">LET'S CONNECT</div>
        <h2 className="text-6xl font-semibold tracking-tighter mb-6">Ready to build the future together?</h2>
        <p className="text-xl text-zinc-400 max-w-md mx-auto">
          I'm always open to conversations around enterprise product leadership and digital transformation.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href={data.linkedin} 
          target="_blank"
          className="px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 font-semibold rounded-3xl flex items-center justify-center gap-x-3 transition-all"
        >
          Connect on LinkedIn
        </a>
        
        <a 
          href={`mailto:${data.email}`}
          className="px-8 py-4 border border-zinc-700 hover:bg-zinc-900 font-semibold rounded-3xl flex items-center justify-center gap-x-3 transition-all"
        >
          Email me
        </a>
      </div>
    </section>
  )
}