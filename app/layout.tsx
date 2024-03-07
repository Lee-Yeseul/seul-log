import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

const blogName = 'SEUL LOG'

export const metadata: Metadata = {
  metadataBase: new URL('https://yeseul-blog.vercel.app/'),
  title: {
    template: `%s | ${blogName}`,
    default: `${blogName}`,
  },
  description: "frontend developer seul's blog",
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
  icons: '/favicon.ico',
  openGraph: {
    type: 'website',
    title: {
      template: `%s`,
      default: `${blogName}`,
    },
    description: `%s`,
    images: `%s`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="my-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
