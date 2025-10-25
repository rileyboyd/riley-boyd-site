import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { debounce } from '@/utils/debounce'

interface NavProps {
  useSticky: boolean
  menuIconClickHandler: (event: React.MouseEvent) => void
}

export const Nav: React.FC<NavProps> = ({
  menuIconClickHandler,
  useSticky,
}) => {
  const [isSticky, setSticky] = useState(false)
  const stickyRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  const getSelectedNavIndex = (pathname = '') => {
    if (pathname == '/') {
      return 0
    } else if (pathname.substring(0, 10) == '/portfolio') {
      return 1
    }
    return null
  }

  const selectedNavIndex = getSelectedNavIndex(pathname)

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return
      }

      const shouldSetSticky = window.pageYOffset > stickyRef.current.offsetTop
      setSticky(shouldSetSticky)
    }

    window.addEventListener('scroll', debounce(handleScroll))
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <nav
      ref={stickyRef}
      className={`rb-navbar rb-navbar-top ${
        useSticky
          ? 'rb-navbar-autohide rb-navbar-transparent rb-navbar-white-text-on-top rb-onscroll-show'
          : ''
      } ${useSticky && isSticky ? 'rb-navbar-solid rb-navbar-fixed' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="rb-nav-table">
          <Link href="/" className="rb-nav-logo">
            <Image
              src="../images/rb-logo-light.svg"
              alt=""
              width="140"
              height="140"
              className="rb-nav-logo-onscroll"
            />
            <Image
              src="../images/rb-logo.svg"
              alt=""
              width="140"
              height="140"
            />
          </Link>
          <ul
            className="rb-nav rb-nav-right hidden lg:block"
            data-nav-mobile="#rb-nav-mobile"
          >
            <li
              className={`rb-drop-item ${
                selectedNavIndex == 0 ? 'active' : ''
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`rb-drop-item ${
                selectedNavIndex == 1 ? 'active' : ''
              }`}
            >
              <Link href="/portfolio/">Portfolio</Link>
            </li>
          </ul>
          <ul className="rb-nav rb-nav-right rb-nav-icons">
            <li className="single-icon lg:hidden">
              <button
                className="rb-navbar-full-toggle"
                onClick={menuIconClickHandler}
              >
                <span className="rb-icon-burger">
                  <span className="rb-t-1"></span>
                  <span className="rb-t-2"></span>
                  <span className="rb-t-3"></span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
