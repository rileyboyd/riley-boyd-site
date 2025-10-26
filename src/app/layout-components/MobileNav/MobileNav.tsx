'use client'

import React from 'react'
import Link from 'next/link'
import { XMarkIcon, LinkedInIcon, TwitterIcon } from '@/components/icons'
import styles from './MobileNav.module.css'

interface MobileNavProps {
  closeBtnHandler: () => void
  isOpened: boolean
}

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/portfolio/',
    label: 'Portfolio',
  },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/rileyboyd/',
    icon: LinkedInIcon,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/riley_boyd',
    icon: TwitterIcon,
    label: 'Twitter',
  },
]

export const MobileNav: React.FC<MobileNavProps> = ({
  closeBtnHandler,
  isOpened,
}) => {
  const showNavbarStyles = {
    display: 'block',
  }

  return (
    <nav
      className={`fixed inset-0 p-0 overflow-hidden bg-[#252b33] z-1002 lg:hidden transition-opacity duration-300 ${
        isOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      id="rb-nav-mobile"
      style={isOpened ? showNavbarStyles : {}}
    >
      <div className="flex flex-col w-full h-full">
        <div className="w-full py-8">
          <button
            className="text-[#d8d8d8] cursor-pointer float-right py-1.5 px-6 mr-2.5 hover:text-white transition-colors duration-300 mt-2"
            onClick={closeBtnHandler}
            aria-label="Close menu"
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="overflow-y-auto h-full">
            <div className="flex flex-col w-full h-full">
              <div className="flex-1 flex flex-col">
                <div className="my-auto">
                  <ul className="relative w-full p-0 pt-6 mx-auto overflow-hidden text-center">
                    {navLinks.map((link, index) => (
                      <li
                        key={link.label}
                        className={`block static max-w-[450px] mx-auto ${isOpened ? `${styles.itemAnimate} ${index === 0 ? styles.itemDelay1 : styles.itemDelay2}` : 'opacity-0'}`}
                      >
                        <Link
                          href={link.href}
                          onClick={closeBtnHandler}
                          className="font-heading block py-2.5 px-20 text-[1.7rem] max-[400px]:text-[1.3rem] max-[550px]:px-10 font-semibold leading-tight text-white hover:text-[#d8d8d8] transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`py-12 px-5 text-center ${isOpened ? styles.socialAnimate : 'opacity-0'}`}
            >
              <ul className="p-0 m-0 list-none">
                {socialLinks.map((social) => (
                  <li key={social.label} className="inline-block">
                    <Link
                      href={social.href}
                      target="_blank"
                      className="text-white block my-1 mx-1.5 hover:text-[#d8d8d8] transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-7 h-7" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
