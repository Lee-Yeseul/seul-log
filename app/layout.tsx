import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | YESEUL Log',
    default: 'YESEUL Log',
  },
  description: "frontend developer yeseul's blog",
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
