'use client'
import React, { useRef, MutableRefObject, UIEvent, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { HeroCanvas } from '@/components/HeroCanvas'

import { getNumberOfYearsSinceDate } from '@/utils/getNumberOfYearsSinceDate'
import { skillIcons } from './skillIcons'

export default function Home() {
  const breakpointCheckRef = useRef(null)
  const aboutRef = useRef(null)
  const [canvasReady, setCanvasReady] = useState(false)
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
    <div className="bg-white">
      <div className="relative overflow-hidden text-center min-h-screen bg-gradient-to-br from-[#1faeaa] via-[#1a9894] to-[#15837f]">
        <div className={canvasReady ? 'hero-canvas-fade-in' : 'opacity-0'}>
          <HeroCanvas onReady={() => setCanvasReady(true)} />
        </div>
        <div className="hero-text-glow" />
        <div className="flex items-center w-full min-h-screen pt-[75px] relative z-[1]">
          <div className="flex-1 w-full py-20">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-white text-[2.2em] md:text-[3.4em] lg:text-[3.6em] leading-[1.18]">
                <span
                  id="hero-text-1"
                  className="block animate-fade-in-up animation-delay-500"
                >
                  Hello, I&apos;m{' '}
                  <span className="text-[#252b33]">Riley&nbsp;Boyd</span>.
                </span>
                <span
                  id="hero-text-2"
                  className="block animate-fade-in-up animation-delay-1750"
                >
                  I&apos;m a senior{' '}
                  <span className="whitespace-nowrap">front-end</span>{' '}
                  web&nbsp;developer.
                </span>
              </h1>
              <Button
                onClick={btnHandler}
                className="inline-block px-[25px] py-[18px] text-[0.96rem] font-medium leading-[1.2] text-center uppercase whitespace-nowrap align-middle cursor-pointer select-none bg-[#252b33] border-0 text-white transition-all duration-500 hover:bg-[#3f4850] mt-8 animate-fade-in-up animation-delay-3000"
              >
                View My Work
              </Button>
              <div className="block h-5"></div>
              <div className="text-white">
                <div className="block h-20"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={scrollDownHandler}
          id="scroll-btn"
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-12 h-12 text-white inline-flex items-center justify-center border border-white rounded-full opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer animate-fade-in animation-delay-3500"
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
        <div className="max-w-7xl mx-auto px-4">
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
              <div className="hidden md:block h-[30px]"></div>
              <Text as="h2" className="text-center hidden md:block">
                {numberOfYearsSinceIStartedWorking} Years of Professional
                Experience.
              </Text>
              <div className="block h-[30px]"></div>
              {mainContent}
              <div className="block h-[30px]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#252b33] text-white" id="skills">
        <div className="max-w-7xl mx-auto px-4 py-8">
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
                  <div className="ml-0">
                    <div className="text-2xl font-medium mb-2">{title}</div>
                  </div>
                  <div
                    className={`${className} flex items-center justify-center w-[50px] h-[50px] mx-auto mt-1 mb-4 text-[3.3rem] leading-[50px] text-center`}
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
