import Link from 'next/link'
import Image from 'next/image'
import matter from 'gray-matter'
import defaultImage from '@/public/assets/images/default_image.png'
import Card from './Card'
import { getPostBlobData } from '@/api/github-rest-api'
import { formatDateToLongString } from '@/utils'
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
              <Image
                src={thumbnail ? thumbnail : defaultImage}
                fill
                alt="thumbnail_image"
              />
            </div>
          </Card.Images>
          <Card.Description>
            <div className="my-1 text-sm font-semibold text-gray-500">
              {formattedDate}
            </div>
            <h6 className="my-1 text-lg font-bold tracking-wide">
              {metaTitle}
            </h6>
            <p className="h-10 text-sm text-gray-500">
              {summary ? summary : metaTitle}
            </p>
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
