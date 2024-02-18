import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const blogName = 'SEUL'

export const metadata: Metadata = {
  title: {
    template: `%s | ${blogName} Log`,
    default: `${blogName} Log`,
  },
  description: "frontend developer seul's blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kor">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main className="my-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
