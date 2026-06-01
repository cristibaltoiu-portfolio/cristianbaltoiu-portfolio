'use client'

import Image from 'next/image'
import { urlFor } from '../lib/image'
import { useState } from 'react'
import { ProjectModal } from './ProjectModal'

export function Projects({ data }: { data: any[] }) {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  if (!data || data.length === 0) return null

  return (
    <>
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800">
        <div className="mb-16">
          <div className="text-emerald-500 text-sm tracking-[3px] font-semibold mb-3">CHAPTER 02</div>
          <h2 className="text-6xl font-semibold tracking-tighter">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.map((project, index) => (
						<div 
			  key={index} 
			  onClick={() => openModal(project)}
			  className="bg-zinc-900 border border-zinc-800 hover:border-emerald-900 rounded-3xl overflow-hidden transition-all group cursor-pointer flex flex-col"
			>
			  {/* Image - Auto-adjusting */}
			  {project.mainImage && (
				<div className="w-full bg-zinc-950 flex justify-center p-4">
				  <Image 
					src={urlFor(project.mainImage).width(800).url()} 
					alt={project.title}
					width={800}
					height={500}
					className="max-h-[260px] w-auto object-contain"
				  />
				</div>
			  )}

			  <div className="p-8 flex-1 flex flex-col">
				<div className="text-emerald-400 text-xs font-mono tracking-widest mb-2">{project.period}</div>
				<h3 className="text-3xl font-semibold tracking-tight mb-4">{project.title}</h3>
				<p className="text-zinc-400 mb-6 line-clamp-3 flex-1">{project.description}</p>
				
				<div className="text-emerald-400 text-sm group-hover:underline mt-auto">View case study →</div>
			  </div>
			</div>
          ))}
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  )
}