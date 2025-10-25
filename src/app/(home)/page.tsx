'use client'
import React, { useRef, MutableRefObject } from 'react'
import Image from 'next/image'

import { Text } from '@/components/Text'
import { HeroSection } from './HeroSection'

import { getNumberOfYearsSinceDate } from '@/app/utils/date.utils'
import { skillIcons } from './skillIcons'

export default function Home() {
  const breakpointCheckRef = useRef(null)
  const aboutRef = useRef(null)

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

  const handleViewWork = () => {
    window.location.href = '/portfolio'
  }

  const handleScrollToAbout = (): void => {
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
      <HeroSection
        onScrollToAbout={handleScrollToAbout}
        onViewWork={handleViewWork}
      />
      <div id="rb-header-title-scroll-down"></div>
      <div className="bg-white" id="about" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:gap-8 items-start p-8">
            <div className="mb-4 md:mb-0 basis-full md:basis-1/3 shrink-0">
              <Text as="h2" className="text-center md:hidden mb-8">
                {numberOfYearsSinceIStartedWorking} Years of Professional
                Experience.
              </Text>
              <Image
                width={400}
                height={400}
                src="/images/personal-photo-about-section-md.jpg"
                alt="Photo of Riley"
                className="w-full h-auto"
              />
            </div>
            <div className="basis-full md:basis-2/3 shrink">
              <Text as="h2" className="text-center hidden md:block">
                {numberOfYearsSinceIStartedWorking} Years of Professional
                Experience.
              </Text>
              {mainContent}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#252b33] text-white" id="skills">
        <div className="px-4 py-8">
          <div className="flex flex-wrap">
            <div className="w-full">
              <Text as="h2" variant="h1" className="text-center text-white">
                Skills
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillIcons.map(({ fileName, title, altText, className }) => (
              <div className="pb-8" key={title}>
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
      <div
        className="h-0 w-0 overflow-hidden opacity-0 md:opacity-60 lg:opacity-80 xl:opacity-100"
        ref={breakpointCheckRef}
      />
    </div>
  )
}
