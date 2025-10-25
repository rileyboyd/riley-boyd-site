'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './MobileNav.module.css'

interface MobileNavProps {
  closeBtnHandler: () => void
  isOpened: boolean
}

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
        <div className="flex-none">
          <div className="max-w-7xl mx-auto px-4">
            <div className="py-8 -mr-6 after:content-[''] after:table after:clear-both">
              <div className="float-left">
                <Link href="/" className="float-left">
                  <Image
                    src="/images/rb-logo-light.svg"
                    alt=""
                    width={85}
                    height={85}
                  />
                </Link>
              </div>
              <button
                className={`text-[#d8d8d8] cursor-pointer float-right py-1.5 px-6 mr-3 sm:mr-0 z-1 hover:text-white transition-colors duration-300`}
                onClick={closeBtnHandler}
                aria-label="Close menu"
              >
                <span className="relative inline-block w-[18px] h-[18px]">
                  <span className="absolute block top-1/2 left-0 w-[21px] h-0 border-b-2 border-current origin-center rotate-45"></span>
                  <span className="absolute block top-1/2 left-0 w-[21px] h-0 border-b-2 border-current origin-center -rotate-45"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="overflow-y-auto h-full">
            <div className="flex flex-col w-full h-full">
              <div className="flex-1 flex flex-col">
                <div className="my-auto">
                  <ul className="relative w-full p-0 pt-6 mx-auto overflow-hidden text-center">
                    <li
                      className={`block static max-w-[450px] mx-auto ${isOpened ? `${styles.itemAnimate} ${styles.itemDelay1}` : 'opacity-0'}`}
                    >
                      <Link
                        href="/"
                        onClick={closeBtnHandler}
                        className="block py-2.5 px-20 font-[family-name:var(--font-arvo)] text-[1.7rem] max-[400px]:text-[1.3rem] max-[550px]:px-10 font-semibold leading-tight text-white hover:text-[#d8d8d8] transition-colors duration-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      className={`block static max-w-[450px] mx-auto ${isOpened ? `${styles.itemAnimate} ${styles.itemDelay2}` : 'opacity-0'}`}
                    >
                      <Link
                        href="/portfolio/"
                        onClick={closeBtnHandler}
                        className="block py-2.5 px-20 font-[family-name:var(--font-arvo)] text-[1.7rem] max-[400px]:text-[1.3rem] max-[550px]:px-10 font-semibold leading-tight text-white hover:text-[#d8d8d8] transition-colors duration-300"
                      >
                        Portfolio
                      </Link>
                    </li>
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
                <li className="inline-block">
                  <Link
                    href="https://www.linkedin.com/in/rileyboyd/"
                    target="_blank"
                    className="block my-1 mx-1.5 text-[1.75em] text-white hover:text-[#d8d8d8] transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    href="https://twitter.com/riley_boyd"
                    target="_blank"
                    className="block my-1 mx-1.5 text-[1.75em] text-white hover:text-[#d8d8d8] transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
