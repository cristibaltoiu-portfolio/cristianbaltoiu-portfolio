import { client } from '../lib/sanity'
import Image from 'next/image'
import { urlFor } from '../lib/image'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "blogPost"] | order(publishedAt desc)`)

  return (
    <main className="bg-zinc-950 text-zinc-200 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-16">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-x-2 mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-semibold tracking-tighter">All Insights</h1>
          <p className="text-xl text-zinc-400 mt-4 max-w-2xl">
            Thoughts on enterprise transformation, product leadership, and AI in service management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post: any, index: number) => (
            <Link 
              key={index} 
              href={`/blog/${post.slug.current}`}
              className="bg-zinc-900 border border-zinc-800 hover:border-emerald-900 rounded-3xl overflow-hidden transition-all group"
            >
              {post.mainImage && (
                <div className="relative h-72 w-full">
                  <Image 
                    src={urlFor(post.mainImage).width(900).height(500).url()} 
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-8">
                <div className="text-emerald-400 text-xs font-mono tracking-widest mb-3">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                <h2 className="text-3xl font-semibold tracking-tight mb-4 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-zinc-400 mb-6 line-clamp-3">{post.excerpt}</p>
                
                <div className="text-emerald-400 text-sm group-hover:underline">Read full article →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-x-2 px-8 py-4 border border-zinc-700 hover:bg-zinc-900 rounded-3xl text-sm transition-all"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  )
}