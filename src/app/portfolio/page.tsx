'use client'
import Link from 'next/link'
import getPortfolioData from '../../data/portfolioData'

const PortfolioPage = () => {
  const portfolioData = getPortfolioData()

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-center pt-60 mb-50">Portfolio</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.map((item, index) => {
            return (
              <div
                key={'portfolio-item-' + index}
                className="group"
              >
                <Link
                  href={item.route}
                  className="relative block overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Image container with square aspect ratio */}
                  <div className="relative w-full pb-[100%] overflow-hidden bg-gray-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.thumbnail}')` }}
                    />
                  </div>

                  {/* Hover overlay with info */}
                  <div className="absolute inset-0 flex items-center justify-center p-12 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center text-white">
                      <h2 className="text-2xl font-bold mb-3 text-white transform translate-y-2.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-200">
                        {item.title}
                      </h2>
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
        <div className="pb-16"></div>
      </div>
    </div>
  )
}

export default PortfolioPage
