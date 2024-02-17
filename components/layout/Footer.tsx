import Link from 'next/link'
import MailIcon from '@/public/assets/icons/mail.svg'
import GithubIcon from '@/public/assets/icons/github.svg'

export default function Footer() {
  return (
    <footer className="border-t-1 w-full border-solid border-gray-300 py-5 text-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <Link href="https://github.com/Lee-Yeseul">
            <GithubIcon width={28} height={28} />
          </Link>
          <Link href="mailto:ssulv3030@gmail.com">
            <MailIcon width={28} height={28} />
          </Link>
        </div>
        <div>©2024. YESEUL LEE. All rights reserved</div>
      </div>
    </footer>
  )
}
