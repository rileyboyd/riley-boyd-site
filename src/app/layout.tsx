import type { Metadata } from 'next'

import 'pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css'
import 'flickity/dist/flickity.min.css'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout-components/globals.css'
import '../styles/index.scss'

import { Header } from './layout-components/Header'
import { Footer } from './layout-components/Footer'
import ClientScripts from '../components/ClientScripts'
import { Arvo, Lato } from 'next/font/google'

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
        <ClientScripts />
        <div className="wrapper">
          <Header />
          <div className="rb-main">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
