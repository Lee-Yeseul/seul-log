import { getRawPosts } from '../../api/github-rest-api'
import Board from '@/components/common/Board'

export const metadata = {
  title: 'Home',
  openGraph: {
    description: '프론트엔드 개발자 SEUL의 블로그입니다.',
    images: [
      { url: 'https://i.imgur.com/dI5n9zc.png', width: 400, height: 300 },
    ],
  },
}

export default async function Home() {
  const posts = await getRawPosts()
  if (!Array.isArray(posts)) return
  const reversedPosts = posts.reverse()

  return (
    <section className="flex min-h-[75vh] w-full justify-center pt-10">
      <div className="w-3/4">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {reversedPosts.map(({ sha, name }) => (
            <Board key={sha} sha={sha} title={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
