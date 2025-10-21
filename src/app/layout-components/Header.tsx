'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { Nav } from './Nav'
import { MobileNav } from './MobileNav'

export const Header: React.FC<HeaderProps> = () => {
  const pathname = usePathname()

  const [fullscreenMenuIsOpened, setFullscreenMenuIsOpened] = useState(false)

  const hasStickyNav = pathname === '/' // Use sticky nav only on home page

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
