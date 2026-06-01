'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../lib/image'

export function Blog({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null

  const featuredPosts = data.slice(0, 3)
  const remainingPosts = data.slice(3)

  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800">
      <div className="mb-16">
        <div className="text-emerald-500 text-sm tracking-[3px] font-semibold mb-3">CHAPTER 05</div>
        <h2 className="text-6xl font-semibold tracking-tighter">Latest Insights</h2>
        <p className="text-xl text-zinc-400 mt-4 max-w-2xl">
          Thoughts on enterprise transformation, product leadership, and AI in service management.
        </p>
      </div>

      {/* Featured Posts */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {featuredPosts.map((post, index) => (
          <Link 
            key={index} 
            href={`/blog/${post.slug.current}`}
            className="bg-zinc-900 border border-zinc-800 hover:border-emerald-900 rounded-3xl overflow-hidden transition-all group flex flex-col"
          >
            {post.mainImage && (
              <div className="relative h-56 w-full">
                <Image 
                  src={urlFor(post.mainImage).width(800).height(450).url()} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-8 flex-1 flex flex-col">
              <div className="text-emerald-400 text-xs font-mono tracking-widest mb-3">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              
              <h3 className="text-2xl font-semibold tracking-tight mb-4 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-zinc-400 line-clamp-3 mb-6 flex-1">{post.excerpt}</p>
              
              <div className="text-emerald-400 text-sm group-hover:underline mt-auto">Read article ?</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Remaining Posts */}
      {remainingPosts.length > 0 && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-semibold">More Articles</h4>
            <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-x-2">
              View all articles ?
            </Link>
          </div>

          <div className="space-y-4">
            {remainingPosts.map((post, index) => (
              <Link 
                key={index} 
                href={`/blog/${post.slug.current}`}
                className="flex items-center justify-between py-4 border-b border-zinc-800 last:border-b-0 group"
              >
                <div>
                  <div className="font-medium group-hover:text-emerald-400 transition-colors">{post.title}</div>
                  <div className="text-sm text-zinc-500">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </div>
                </div>
                <div className="text-emerald-400 text-sm">?</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}