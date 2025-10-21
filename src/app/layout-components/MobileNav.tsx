'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import gsap from 'gsap'

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
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px)',
  }

  const navbarFullRef = useRef<HTMLElement | null>(null)
  const navSocialRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const navbar = navbarFullRef.current
    const navbarSocial = navSocialRef.current

    if (!navbar || !navbarSocial) return

    const navbarMenuItems = navbar.querySelectorAll(
      '.rb-navbar-mobile-content .rb-nav > li > a'
    )

    if (!isOpened) {
      gsap.set([navbarMenuItems, navbarSocial], {
        opacity: 0,
        force3D: true,
      })
      return
    }

    // Set initial states
    gsap.set([navbarMenuItems, navbarSocial], {
      opacity: 0,
      y: 20,
      force3D: true,
    })

    // Animate navbar fade-in
    gsap.to(navbar, {
      duration: 0.4,
      opacity: 1,
      display: 'block',
    })

    // Animate nav links with stagger
    gsap.to(navbarMenuItems, {
      duration: 0.4,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 0.2,
    })

    // Animate social icons
    gsap.to(navbarSocial, {
      duration: 0.3,
      y: 0,
      opacity: 1,
      delay: 0.4,
    })

    return () => {
      gsap.killTweensOf([navbar, navbarMenuItems, navbarSocial])
    }
  }, [isOpened])

  return (
    <nav
      ref={navbarFullRef}
      className="rb-navbar rb-navbar-full rb-navbar-align-center"
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
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/portfolio/">Portfolio</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rb-nav-row">
          <div className="container">
            <div className="rb-nav-social" ref={navSocialRef}>
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
