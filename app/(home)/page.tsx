import { getRawPosts } from '../../api/github-rest-api'
import Board from '@/components/common/Board'

export default async function Home() {
  const posts = await getRawPosts()
  if (!Array.isArray(posts)) return

  return (
    <section className="flex min-h-[75vh] w-full justify-center pt-10">
      <div className="w-3/4">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {posts.map(({ sha, name }) => (
            <Board key={sha} sha={sha} title={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
