import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
    if (!useSticky) return

    const handleScroll = () => {
      // Set sticky when scrolled down more than 50px
      const shouldSetSticky = window.pageYOffset > 50
      setSticky(shouldSetSticky)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [useSticky])

  return (
    <nav
      ref={stickyRef}
      className={`py-8 text-[0.96rem] transition-all duration-300 z-[1000] ${
        useSticky
          ? `${isSticky ? 'fixed top-0 left-0 right-0 bg-white shadow-md' : 'relative bg-transparent'}`
          : 'relative bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row items-center w-full">
          <Link href="/" className="flex items-center flex-none ml-1">
            {useSticky && !isSticky ? (
              <Image
                src="../images/rb-logo-light.svg"
                alt=""
                width="140"
                height="140"
              />
            ) : (
              <Image
                src="../images/rb-logo.svg"
                alt=""
                width="140"
                height="140"
              />
            )}
          </Link>
          <ul
            className="hidden lg:block text-lg text-right pl-5 ml-auto"
            data-nav-mobile="#rb-nav-mobile"
          >
            <li
              className={`inline-block align-middle ${
                selectedNavIndex == 0 ? 'active' : ''
              }`}
            >
              <Link
                href="/"
                className={`block px-4 py-1.5 font-medium uppercase transition-colors duration-300 ${
                  useSticky && !isSticky
                    ? `${selectedNavIndex == 0 ? 'font-semibold text-white' : 'text-white hover:text-[#d8d8d8]'}`
                    : `${selectedNavIndex == 0 ? 'font-semibold text-black' : 'text-black hover:text-[#0e0e0e]'}`
                }`}
              >
                Home
              </Link>
            </li>
            <li
              className={`inline-block align-middle ${
                selectedNavIndex == 1 ? 'active' : ''
              }`}
            >
              <Link
                href="/portfolio/"
                className={`block px-4 py-1.5 font-medium uppercase transition-colors duration-300 ${
                  useSticky && !isSticky
                    ? `${selectedNavIndex == 1 ? 'font-semibold text-white' : 'text-white hover:text-[#d8d8d8]'}`
                    : `${selectedNavIndex == 1 ? 'font-semibold text-black' : 'text-black hover:text-[#0e0e0e]'}`
                }`}
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <div className="lg:hidden text-right whitespace-nowrap ml-auto">
            <button
              className={`p-4 sm:mr-0 md:mr-4 text-xl transition-colors duration-300 ${
                useSticky && !isSticky
                  ? 'text-white hover:text-[#d8d8d8]'
                  : 'text-[#252b33] hover:text-black'
              }`}
              onClick={menuIconClickHandler}
              aria-label="Open menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
