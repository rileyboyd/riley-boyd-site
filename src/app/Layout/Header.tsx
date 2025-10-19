import { usePathname } from 'next/navigation'

import { Nav } from './Nav'

interface HeaderProps {
  menuIconClickHandler: (event: React.MouseEvent) => void
}

export const Header: React.FC<HeaderProps> = ({ menuIconClickHandler }) => {
  const pathname = usePathname()

  const hasStickyNav = pathname === '/' // Use sticky nav only on home page
  return (
    <header className={`rb-header ${hasStickyNav ? 'rb-header-over' : ''}`}>
      <Nav
        useSticky={hasStickyNav}
        menuIconClickHandler={menuIconClickHandler}
      />
    </header>
  )
}
