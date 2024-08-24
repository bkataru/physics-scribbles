import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import './globals.css'
import 'katex/dist/katex.min.css'

import type { Metadata } from 'next'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Physics Scribbles',
  description: 'Just random physics writings I do in my spare time.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-2xl px-6">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
