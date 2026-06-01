'use client'

import { urlFor } from '../lib/image'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

interface ProjectModalProps {
  project: any
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6" onClick={onClose}>
      <div 
        className="bg-zinc-900 border border-zinc-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl" 
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-8 border-b border-zinc-800">
          <div>
            <div className="text-emerald-400 text-sm font-mono tracking-widest mb-2">{project.period}</div>
            <h2 className="text-4xl font-semibold tracking-tight pr-8">{project.title}</h2>
            <p className="text-xl text-zinc-400 mt-2">{project.role}</p>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white text-3xl">×</button>
        </div>

		{/* Image - Auto-adjusts to picture's real aspect ratio */}
		{project.mainImage && (
		  <div className="w-full bg-zinc-950 flex justify-center p-6">
			<Image 
			  src={urlFor(project.mainImage).width(1400).url()} 
			  alt={project.title}
			  width={1200}
			  height={800}
			  className="max-h-[520px] w-auto object-contain rounded-xl"
			/>
		  </div>
		)}
        {/* Content */}
        <div className="p-8">
          <div className="prose prose-invert max-w-none text-zinc-300">
            <PortableText value={project.body} />
          </div>
        </div>
      </div>
    </div>
  )
}