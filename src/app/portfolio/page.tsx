'use client'
import Link from 'next/link'
import getPortfolioData from '../../data/portfolioData'
import { Text } from '@/components/Text'

const PortfolioPage = () => {
  const portfolioData = getPortfolioData()

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <Text as="h1" className="text-center mt-8 mb-8">
          Portfolio
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
          {portfolioData.map((item, index) => {
            return (
              <div key={'portfolio-item-' + index} className="group">
                <Link
                  href={item.route}
                  className="relative block overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full pb-[100%] overflow-hidden bg-gray-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.thumbnail}')` }}
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center p-12 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center text-white">
                      <Text
                        as="h2"
                        className="text-2xl font-bold mb-3 text-white transform translate-y-2.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-200"
                      >
                        {item.title}
                      </Text>
                      <div className="text-sm font-medium uppercase transform translate-y-2.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-300">
                        {item.type}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
