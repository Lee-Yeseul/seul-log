import { getRawPosts } from '@/api/github-rest-api'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getRawPosts()
  if (!Array.isArray(posts)) return []
  const baseURL = 'https://yeseul-blog.vercel.app'
  return posts.map((_, idx) => ({
    url: `${baseURL}/posts/${idx}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  }))
}
