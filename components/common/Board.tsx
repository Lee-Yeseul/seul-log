import Link from 'next/link'
import matter from 'gray-matter'
import Card from './Card'
import { getPostBlobData } from '@/api/github-rest-api'
import { addPrefixToTarget, formatDateToLongString } from '@/utils'
import Tag from './Tag'

interface BoardProps {
  sha: string
  title: string
}

export default async function Board({ sha, title }: BoardProps) {
  const postingTitle = title.slice(0, -3)
  const blobData = await getPostBlobData(sha)

  if (!blobData) return

  const markdownContent = Buffer.from(blobData.content, 'base64').toString(
    'utf-8',
  )
  const { data: metadata } = matter(markdownContent)
  const { createDate, title: metaTitle, summary, tags, thumbnail } = metadata
  const formattedDate = formatDateToLongString(createDate)

  return (
    <div>
      <Link href={`/posts/${postingTitle}`}>
        <Card className="bg-white">
          <Card.Images>
            <div className="relative h-[25vh] w-full object-cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  thumbnail
                    ? addPrefixToTarget(thumbnail, 'l', '.png')
                    : '/assets/images/default_image.png'
                }
                alt="thumbnail_image"
                className="h-full w-full object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Card.Images>
          <Card.Description>
            <div className="my-1 text-sm font-semibold text-gray-500">
              {formattedDate}
            </div>
            <div className="">
              <h2 className="my-1 text-lg font-bold tracking-wide">
                {metaTitle}
              </h2>
              <p className="h-10 text-sm text-gray-500">
                {summary ? summary : metaTitle}
              </p>
            </div>
            <div className="mt-4 flex gap-2 text-xs font-bold">
              {tags.map((value: string, index: number) => (
                <Tag key={index} value={value} index={index} />
              ))}
            </div>
          </Card.Description>
        </Card>
      </Link>
    </div>
  )
}
