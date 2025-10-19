import type { Metadata } from 'next'

import '../styles/index.scss'
import { Layout } from './Layout/Layout'
import { Arvo, Lato } from 'next/font/google'

// Font loaders must be called at module scope so Next can extract and optimize them
const arvo = Arvo({ subsets: ['latin'], weight: ['400', '700'] })
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
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
    <html lang="en" className={`${arvo.className} ${lato.className}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
