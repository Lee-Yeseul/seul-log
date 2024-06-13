import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = 'https://yeseul-blog.vercel.app'
  return [
    {
      url: `${baseURL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
