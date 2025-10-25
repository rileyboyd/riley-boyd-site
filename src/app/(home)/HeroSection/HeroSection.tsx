'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { HeroCanvas } from './HeroCanvas'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  onScrollToAbout: () => void
  onViewWork: () => void
}

export function HeroSection({ onScrollToAbout, onViewWork }: HeroSectionProps) {
  const [canvasReady, setCanvasReady] = useState(false)

  const scrollDownHandler = (): void => {
    onScrollToAbout()
  }

  return (
    <div className="relative overflow-hidden text-center min-h-screen bg-linear-to-br from-[#1faeaa] via-[#1a9894] to-[#15837f]">
      {/* Canvas Background */}
      <div className={canvasReady ? styles.canvasFadeIn : 'opacity-0'}>
        <HeroCanvas onReady={() => setCanvasReady(true)} />
      </div>

      {/* Text Glow Effect */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[50vh] pointer-events-none z-0 ${styles.textGlow}`}
      />

      {/* Content */}
      <div className="relative flex items-center w-full min-h-screen pt-[75px]">
        <div className="flex-1 w-full py-20">
          <div className="max-w-7xl mx-auto px-4">
            <Text
              as="h1"
              className="text-white text-[2.2em] md:text-[3.4em] lg:text-[3.6em] leading-[1.18] mb-8"
            >
              <span
                id="hero-text-1"
                className={`block ${styles.fadeInUp} ${styles.delay500}`}
              >
                Hello, I&apos;m{' '}
                <span className="text-[#252b33]">Riley&nbsp;Boyd</span>.
              </span>
              <span
                id="hero-text-2"
                className={`block ${styles.fadeInUp} ${styles.delay1750}`}
              >
                I&apos;m a senior{' '}
                <span className="whitespace-nowrap">front-end</span>{' '}
                web&nbsp;developer.
              </span>
            </Text>

            <Button
              onClick={onViewWork}
              size="lg"
              className={`uppercase ${styles.fadeInUp} ${styles.delay3000}`}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollDownHandler}
        id="scroll-btn"
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 w-12 h-12 text-white inline-flex items-center justify-center border border-white rounded-full opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer ${styles.fadeIn} ${styles.delay3500}`}
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
  )
}
