import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-slim flex snap-start flex-col items-center justify-center gap-3 border-solid border-t-gray-50  py-5 text-sm">
      <div className="flex gap-5">
        <Link href="https://github.com/Lee-Yeseul"></Link>
        <Link href="https://velog.io/@ssulv3030/posts"></Link>
        <Link href="mailto:ssulv3030@gmail.com"></Link>
      </div>
      <div>©2024. YESEUL LEE. All rights reserved</div>
    </footer>
  )
}
