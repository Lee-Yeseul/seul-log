import Link from 'next/link'
import ArrowOutward from '@/public/assets/icons/arrow_outward.svg'

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 h-16 w-full border-b-[1px] border-solid border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-10">
        <Link href="/" className="text-xl font-bold">
          {"Seul's Log"}
        </Link>
        <Link
          href="https://yeseul-portfolio.vercel.app/"
          className="flex items-center font-semibold hover:text-gray-500 hover:underline"
        >
          포트폴리오
          <ArrowOutward width={20} fill="gray" />
        </Link>
      </div>
    </header>
  )
}
