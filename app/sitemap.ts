import type { MetadataRoute } from 'next'
import { client } from './lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(`
    *[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }
  `)

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://cristianbaltoiu.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://cristianbaltoiu.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `https://cristianbaltoiu.com/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}