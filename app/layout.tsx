import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

const blogName = 'SEUL'

export const metadata: Metadata = {
  title: {
    template: `%s | ${blogName} Log`,
    default: `${blogName} Log`,
  },
  description: "frontend developer seul's blog",
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kor">
      <body className={inter.className}>
        <Header />
        <main className="my-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
