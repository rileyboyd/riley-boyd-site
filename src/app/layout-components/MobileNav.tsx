'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
      className={`rb-navbar rb-navbar-full rb-navbar-align-center lg:hidden ${isOpened ? 'mobile-nav-open' : ''}`}
      id="rb-nav-mobile"
      style={isOpened ? showNavbarStyles : {}}
    >
      <div className="rb-nav-table">
        <div className="rb-nav-row">
          <div className="container">
            <div className="rb-nav-header">
              <div className="rb-nav-logo">
                <Link href="/" className="rb-nav-logo">
                  <Image
                    src="/images/rb-logo-light.svg"
                    alt=""
                    width={85}
                    height={85}
                  />
                </Link>
              </div>
              <button
                className={`rb-nav-close rb-navbar-full-toggle ${
                  isOpened ? 'active' : ''
                }`}
                onClick={closeBtnHandler}
              >
                <span className="rb-icon-close"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="rb-nav-row-full rb-nav-row">
          <div className="nano">
            <div className="nano-content">
              <div className="rb-nav-table">
                <div className="rb-nav-row rb-nav-row-full rb-nav-row-center rb-navbar-mobile-content">
                  <ul className="rb-nav">
                    <li className={isOpened ? 'mobile-nav-item-animate mobile-nav-item-delay-1' : ''}>
                      <Link href="/" onClick={closeBtnHandler}>
                        Home
                      </Link>
                    </li>
                    <li className={isOpened ? 'mobile-nav-item-animate mobile-nav-item-delay-2' : ''}>
                      <Link href="/portfolio/" onClick={closeBtnHandler}>
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rb-nav-row">
          <div className="container">
            <div className={`rb-nav-social ${isOpened ? 'mobile-nav-social-animate' : ''}`}>
              <ul>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/rileyboyd/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/riley_boyd" target="_blank">
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
