import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-gray-200 py-5 text-sm">
      <div className="flex flex-col items-center">
        <div className="flex gap-5">
          <Link href="https://github.com/Lee-Yeseul">github</Link>
          <Link href="mailto:ssulv3030@gmail.com">mail</Link>
        </div>
        <div>©2024. YESEUL LEE. All rights reserved</div>
      </div>
    </footer>
  )
}
