'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { Nav } from './Nav'
import { MobileNav } from './MobileNav'

export const Header: React.FC = () => {
  const pathname = usePathname()

  const [fullscreenMenuIsOpened, setFullscreenMenuIsOpened] = useState(false)

  const hasStickyNav = pathname === '/' // Use sticky nav only on home page

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && fullscreenMenuIsOpened) {
        setFullscreenMenuIsOpened(false)
      }
    }

    window.addEventListener('keydown', handleEscKey)
    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  }, [fullscreenMenuIsOpened])

  return (
    <header
      className={`w-full ${hasStickyNav ? 'fixed top-0 left-0 bg-transparent z-100' : ''}`}
    >
      <Nav
        useSticky={hasStickyNav}
        menuIconClickHandler={() => setFullscreenMenuIsOpened(true)}
      />
      <MobileNav
        isOpened={fullscreenMenuIsOpened}
        closeBtnHandler={() => setFullscreenMenuIsOpened(false)}
      />
    </header>
  )
}
