import Image from 'next/image'
import Card from '../common/Card'
import testImage from '@/public/assets/images/testImage.jpg'
import Link from 'next/link'

export default function CardList() {
  const list = Array.from({ length: 10 }, () => 0)
  const list2 = Array.from({ length: 3 }, () => 0)
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {list.map((value, index) => (
        <Link key={index} href={'/posts/123'}>
          <Card className="bg-white">
            <Card.Images>
              <Image src={testImage} alt="thumbnail_image" />
            </Card.Images>
            <Card.Description>
              <div className="my-1 text-sm font-bold text-purple-500">
                January 20, 2024
              </div>
              <h6 className="my-1 text-lg font-bold tracking-wide">
                개발자의 멘탈 모델
              </h6>
              <p className="text-sm text-gray-500">
                mental models ar simple expression of complex processes or
                relationships
              </p>
              <div className="mt-4 flex gap-2 text-xs font-bold">
                {list2.map((value, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-purple-200 px-1.5 py-1 text-purple-500"
                  >
                    frontend
                  </div>
                ))}
              </div>
            </Card.Description>
          </Card>
        </Link>
      ))}
    </div>
  )
}
