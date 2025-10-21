'use client'
import { useEffect, useEffectEvent, useState } from 'react'
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
    <header className={`rb-header ${hasStickyNav ? 'rb-header-over' : ''}`}>
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
