import { client } from '../../lib/sanity'
import Image from 'next/image'
import { urlFor } from '../../lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-semibold tracking-tight mt-14 mb-6 text-white">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-semibold tracking-tight mt-12 mb-5 text-white">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-10 mb-4 text-white">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-zinc-300 leading-8 mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-emerald-400 pl-6 my-8 text-zinc-300 italic">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-8 mb-8 space-y-3 text-zinc-300">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-8 mb-8 space-y-3 text-zinc-300">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-8">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="leading-8">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-white">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-zinc-200">
        {children}
      </em>
    ),
    code: ({ children }: any) => (
      <code className="rounded-md bg-zinc-900 px-2 py-1 text-sm text-emerald-300">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
      >
        {children}
      </a>
    ),
  },

  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null

      return (
        <div className="relative w-full aspect-video my-12 rounded-3xl overflow-hidden">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value?.alt || 'Blog image'}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]`,
    { slug }
  )

  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Post not found</h1>
          <Link href="/blog" className="text-emerald-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-zinc-950 text-zinc-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-x-2 text-emerald-400 hover:text-emerald-300 mb-12"
        >
          ← Back to all articles
        </Link>

        <div className="mb-12">
          {post.publishedAt && (
            <div className="text-emerald-400 text-sm font-mono tracking-widest mb-4">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          )}

          <h1 className="text-6xl font-semibold tracking-tighter mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-zinc-400 leading-8">
              {post.excerpt}
            </p>
          )}
        </div>

        {post.mainImage && (
          <div className="relative w-full aspect-video mb-16 rounded-3xl overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1400).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {post.body && (
          <article>
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </article>
        )}

        <div className="mt-20 pt-12 border-t border-zinc-800 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-x-2 px-8 py-4 border border-zinc-700 hover:bg-zinc-900 rounded-3xl text-sm transition-all"
          >
            ← Back to all insights
          </Link>
        </div>
      </div>
    </main>
  )
}