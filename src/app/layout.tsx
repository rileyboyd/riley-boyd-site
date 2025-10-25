import type { Metadata } from 'next'

import './layout-components/globals.css'

import { Header } from './layout-components/Header'
import { Footer } from './layout-components/Footer'
import { Arvo, Lato } from 'next/font/google'

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arvo'
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'Riley Boyd: Senior Frontend Engineer',
  description: 'Riley Boyd: Senior Frontend Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${arvo.variable} ${lato.variable}`}>
      <body>
        <Header />
        <div className="relative overflow-hidden bg-white z-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
