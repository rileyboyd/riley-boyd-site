import React from 'react'
import { getNumberOfYearsSinceDate } from '@/utils/getNumberOfYearsSinceDate'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const numberOfYearsSinceIStartedWorking = getNumberOfYearsSinceDate(
    '2011-07-11T00:00:00'
  )

  return (
    <footer className="relative overflow-hidden bg-[#0c0c0c] z-1">
      <div className="bg-image">
        <div
          className="bg-image-overlay"
          style={{ backgroundColor: 'rgba(12, 12, 12, 0.9)' }}
        ></div>
      </div>

      <div className="py-24 text-white border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap vertical-gap">
            <div className="w-full">
              <div>
                <h4 className="text-white mb-4 font-bold">About Me</h4>
                <p className="font-[family-name:var(--font-arvo)]">
                  My name&apos;s Riley Boyd, I&apos;m a senior front-end web
                  developer with {numberOfYearsSinceIStartedWorking} years of
                  professional experience. I have an M.A. in Humanities
                  Computing, and an Hons. B.A. in Multimedia and Fine&nbsp;Art.
                  I live in Toronto, Ontario,&nbsp;Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-1">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-white text-[0.95rem]">
            <p>&copy;{currentYear} Riley Boyd</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
