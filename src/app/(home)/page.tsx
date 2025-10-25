'use client'
import React, { useRef, MutableRefObject, UIEvent } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'

import { getNumberOfYearsSinceDate } from '@/utils/getNumberOfYearsSinceDate'
import { skillIcons } from './skillIcons'

export default function Home() {
  const breakpointCheckRef = useRef(null)
  const aboutRef = useRef(null)
  // contactRef removed while ContactSection is hidden; re-enable when restoring contact section

  const getBreakpoint = (checkerEle: HTMLElement): string => {
    const breakpointOpacity = Number(
      window.getComputedStyle(checkerEle).getPropertyValue('opacity')
    )

    if (breakpointOpacity == 1) {
      return 'lg'
    }

    if (breakpointOpacity == 0.8) {
      return 'md'
    }

    if (breakpointOpacity == 0.6) {
      return 'sm'
    }

    return 'xs'
  }

  const scrollToRef = (
    refToScrollTo: MutableRefObject<HTMLElement | null>
  ): void => {
    if (!refToScrollTo.current || !breakpointCheckRef.current) {
      return
    }

    const currentBreakpoint = getBreakpoint(breakpointCheckRef.current)
    const offset = currentBreakpoint == 'lg' ? 101 : 98

    window.scrollTo({
      top: refToScrollTo.current.offsetTop - offset,
      behavior: 'smooth',
    })
  }

  const btnHandler = () => {
    window.location.href = '/portfolio'
  }

  const scrollDownHandler = (event: UIEvent<HTMLElement>): void => {
    event.preventDefault()
    scrollToRef(aboutRef)
  }

  const numberOfYearsSinceIStartedWorking = getNumberOfYearsSinceDate(
    '2011-07-11T00:00:00'
  )

  const mainContent = (
    <>
      <Text>
        I build rich user interfaces for the web using modern tools like
        React/Vue, SASS/CSS3, HTML5, NPM, and Git, and I can write great vanilla
        Javascript code. I build responsive websites and web apps that are
        well-tested, work well across browsers, and are optimized to provide a
        great user experience for mobile, tablet, and desktop users.
      </Text>
      <Text>
        I have strong design skills, and I am skilled with Figma and the Adobe
        Creative Suite of applications, including Photoshop, Illustrator, and
        InDesign.
      </Text>
      <Text>
        My most recent role was as a Frontend Engineer at Amazon, where I worked
        on applications for Amazon Marketing Cloud. I have also worked for a
        variety of companies/agencies in the digital advertising sector, and
        have had the opportunity to work on websites for some major brands
        (e.g., Sony, General Motors, Nestle, Volkswagen).
      </Text>
      <Text>
        I hold a Master of Arts in Humanities Computing (University of Alberta),
        and an Honours Bachelor of Arts in Multimedia and Fine Art (McMaster
        University).
      </Text>
    </>
  )

  return (
    <div className="page-home">
      <div className="rb-header-title rb-header-title-full rb-header-title-parallax-opacity relative">
        <div className="rb-header-table">
          <div className="rb-header-table-cell">
            <div className="container mx-auto px-4">
              <h1 className="rb-title display-3">
                <span
                  id="hero-text-1"
                  className="hero-text-line animate-fade-in-up animation-delay-500"
                >
                  Hello, I&apos;m{' '}
                  <span className="hero-text-name">Riley&nbsp;Boyd</span>.
                </span>
                <span
                  id="hero-text-2"
                  className="hero-text-line animate-fade-in-up animation-delay-1750"
                >
                  I&apos;m a senior{' '}
                  <span className="whitespace-nowrap">front-end</span>{' '}
                  web&nbsp;developer.
                </span>
              </h1>
              <Button
                onClick={btnHandler}
                className="hero-btn rb-btn animate-fade-in-up animation-delay-3000 mt-8"
              >
                View My Work
              </Button>
              <div className="rb-gap"></div>
              <div className="rb-header-text text-white">
                <div className="rb-gap-4"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={scrollDownHandler}
          id="scroll-btn"
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-12 h-12 text-white inline-flex items-center justify-center border border-white rounded-full opacity-60 hover:opacity-100 transition-opacity duration-500 animate-fade-in animation-delay-3500 cursor-pointer"
          aria-label="Scroll down to content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="w-6 h-6 shrink-0 inline"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      <div id="rb-header-title-scroll-down"></div>
      <div className="bg-white" id="about" ref={aboutRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:gap-8 items-start">
            <div className="basis-full md:basis-1/3 shrink-0 about-me-photo-col p-8">
              <Text as="h2" className="text-center md:hidden mb-8">
                {numberOfYearsSinceIStartedWorking} Years of Professional
                Experience.
              </Text>
              <Image
                width={400}
                height={400}
                src="/images/personal-photo-about-section-md.jpg"
                alt="Photo of Riley"
                className="about-me-photo w-full h-auto"
              />
            </div>
            <div className="basis-full md:basis-2/3 shrink about-me-text">
              <div className="rb-gap-1 hidden md:block"></div>
              <Text as="h2" className="text-center hidden md:block">
                {numberOfYearsSinceIStartedWorking} Years of Professional
                Experience.
              </Text>
              <div className="rb-gap-1"></div>
              {mainContent}
              <div className="rb-gap-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="rb-box bg-dark-1 text-white" id="skills">
        <div className="rb-gap-3 mnt-6" />
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <Text as="h2" variant="h1" className="text-center text-white">
                Skills
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {skillIcons.map(({ fileName, title, altText, className }) => (
              <div className="skill-box" key={title}>
                <div className="flex flex-col items-center justify-center text-center p-4 h-full">
                  <div className="rb-ibox-cont">
                    <div className="rb-ibox-title mb-2">{title}</div>
                  </div>
                  <div
                    className={`rb-ibox-icon ${className} flex items-center justify-center`}
                  >
                    <Image
                      width={120}
                      height={120}
                      src={`/images/icons/${fileName}`}
                      alt={altText}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="breakpoint-check" ref={breakpointCheckRef} />
    </div>
  )
}
