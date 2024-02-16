import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 h-16 w-full border-b-[1px] border-solid border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-10">
        <Link href="/">Three의 블로그</Link>
        <Link href="https://yeseul-portfolio.vercel.app/">포트폴리오</Link>
      </div>
    </header>
  )
}
