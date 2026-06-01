import Image from 'next/image'
import { urlFor } from '../lib/image'

export function Hero({ data }: { data: any }) {
  if (!data) return null

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 pt-20 bg-zinc-950">
      <div className="max-w-4xl text-center">
        {/* Profile Image */}
        {data.profileImage && (
          <div className="mx-auto mb-15 w-50 h-50 rounded-full overflow-hidden border-4 border-emerald-600/30">
            <Image 
              src={urlFor(data.profileImage).width(1000).height(1000).url()} 
              alt="Cristian Baltoiu"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        )}

        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-3xl mb-6">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">OPEN TO OPPORTUNITIES</span>
        </div>

        <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter mb-6">
          {data.headline}
        </h1>
        
        <p className="text-3xl md:text-4xl font-light text-zinc-400 tracking-tight mb-8">
          {data.subheadline}
        </p>

        {/* Quick Navigation - Bigger Buttons */}
<div className="mt-16 flex flex-wrap justify-center gap-4 text-sm">
  <a href="#about" className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-700 rounded-3xl transition-all text-base">About</a>
  
  <a href="#blog" className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-700 rounded-3xl transition-all text-base">Insights</a>
  
  <a href="#projects" className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-700 rounded-3xl transition-all text-base">Projects</a>
  
  <a href="#experience" className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-700 rounded-3xl transition-all text-base">Journey</a>
  
  <a href="#education" className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-700 rounded-3xl transition-all text-base">Education</a>
  
  <a href="#skills" className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-700 rounded-3xl transition-all text-base">Skills</a>
  
  <a href="#contact" className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-700 rounded-3xl transition-all text-base">Contact</a>
</div>
      </div>
	  
    </section>
  )
}