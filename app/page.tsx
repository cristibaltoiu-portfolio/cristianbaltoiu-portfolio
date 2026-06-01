import { client } from './lib/sanity'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

export default async function Home() {
  const hero = await client.fetch(`*[_type == "hero"][0]`)
  const about = await client.fetch(`*[_type == "about"][0]`)
  const blog = await client.fetch(`*[_type == "blogPost"] | order(publishedAt desc)`)
  const projects = await client.fetch(`*[_type == "project"] | order(order asc)`)
  const experience = await client.fetch(`*[_type == "experience"] | order(order asc)`)
  const education = await client.fetch(`*[_type == "education"] | order(_createdAt asc)`)
  const skills = await client.fetch(`*[_type == "skill"]`)
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`)
  

  return (
    <main className="bg-zinc-950 text-zinc-200">
      <Hero data={hero} />
      <About data={about} />
      <Blog data={blog} />
      <Projects data={projects} />
      <Experience data={experience} />
      <Education data={education} />
      <Skills data={skills} />
      <Contact data={siteSettings} />
    </main>
  )
}