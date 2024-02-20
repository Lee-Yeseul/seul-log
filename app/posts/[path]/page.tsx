import { getRawPosts } from '@/api/github-rest-api'
import CommentInput from '@/components/comment/CommentInput'
import CommentList from '@/components/comment/CommentList'
import MarkdownContent from '@/components/common/MarkdownContent'
import Tag from '@/components/common/Tag'
import { formatDateToLongString } from '@/utils'
import matter from 'gray-matter'

interface PostDetailProps {
  params: { path: string }
}

export async function generateMetadata({ params: { path } }: PostDetailProps) {
  return {
    title: path,
  }
}

export default async function Post({ params: { path } }: PostDetailProps) {
  const decodedPath = decodeURIComponent(path)

  const postingData = await getRawPosts(`blog/${decodedPath}.md`)

  const { data: metadata, content } = matter(postingData as unknown as string)
  const { createDate, title, tags } = metadata
  const formattedDate = formatDateToLongString(createDate)

  return (
    <>
      <section className="flex min-h-[75vh] w-full flex-col items-center justify-center pt-10">
        <article className="sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2">
          <h2 className="text-4xl font-bold">{title}</h2>
          <div className="mt-4 text-base font-medium text-gray-500">
            {formattedDate ?? ''}
          </div>
          <div className="mt-4 flex gap-4">
            {tags.map((value: string, index: number) => (
              <Tag key={index} value={value} index={index} />
            ))}
          </div>
          <div className="mt-8">
            <MarkdownContent content={content} />
          </div>
        </article>
        <hr className="my-20 h-px bg-gray-300 sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2 "></hr>
        <section className="sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2">
          <div className="text-xl font-bold">댓글 3개</div>
          <CommentInput />
          <CommentList />
        </section>
      </section>
    </>
  )
}
