'use client'
import React, { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems, PortfolioItem } from '../portfolioItems'
import { Text } from '@/components/Text'

const PortfolioItemPage = () => {
  const router = useRouter()
  const params = useParams()

  // Load portfolio data directly

  // When the page loads, start the scroll at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goToItemHandler = (event: React.MouseEvent, url: string) => {
    event.preventDefault()
    router.push(url)
    window.scrollTo(0, 0)
  }

  const portfolioItem = portfolioItems.find(
    (item: PortfolioItem) => item.id === params.id
  )

  if (!portfolioItem) {
    return <div>Portfolio item not found</div>
  }

  const itemIndex = portfolioItems.findIndex(
    (item: PortfolioItem) => item.id === params.id
  )

  return (
    <>
      <div className="w-full px-4">
        <div className="bg-white">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:order-2">
              <div data-offset-top={0}>
                <div className="max-w-[540px] pt-24 pr-16 pb-24 pl-24 md:p-20 sm:p-12">
                  <Text as="h1" className="mb-8 tracking-wide text-4xl">
                    {portfolioItem.title}
                  </Text>
                  <div className="mb-12">
                    <Text as="h4">{portfolioItem.subheading}</Text>
                    <Text>{portfolioItem.description}</Text>
                  </div>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="w-24 pb-1 pr-2 align-top">
                          <strong className="font-medium text-[#252b33]">
                            Role:
                          </strong>
                        </td>
                        <td className="w-auto pr-0">{portfolioItem.role}</td>
                      </tr>
                      <tr>
                        <td className="w-24 pt-1 pb-1 pr-2 align-top">
                          <strong className="font-medium text-[#252b33]">
                            Tech used:
                          </strong>
                        </td>
                        <td className="w-auto pr-0 pt-1">
                          {portfolioItem.tech}
                        </td>
                      </tr>
                      <tr>
                        <td className="w-24 pt-1 pb-1 pr-2 align-top">
                          <strong className="font-medium text-[#252b33]">
                            Company:
                          </strong>
                        </td>
                        <td className="w-auto pr-0 pt-1">
                          {portfolioItem.company}
                        </td>
                      </tr>
                      <tr>
                        <td className="w-24 pt-1 pb-1 pr-2 align-top">
                          <strong className="font-medium text-[#252b33]">
                            Year
                          </strong>
                        </td>
                        <td className="w-auto pr-0 pt-1">
                          {portfolioItem.year}
                        </td>
                      </tr>
                      {portfolioItem.url && (
                        <tr>
                          <td className="w-24 pt-1 pb-1 pr-2 align-top">
                            <strong className="font-medium text-[#252b33]">
                              URL
                            </strong>
                          </td>
                          <td className="w-auto pr-0 pt-1">
                            <a
                              href={portfolioItem.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-inherit no-underline transition-opacity duration-500 hover:opacity-60"
                            >
                              {portfolioItem.url}
                            </a>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div>
                {portfolioItem.images.map((image, index) => (
                  <Image
                    key={`portfolio-item-img-${index}`}
                    src={image}
                    alt={`${portfolioItem.title} - Image ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto mb-8 shadow-[0_0_4px_0_rgba(0,0,0,0.2)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {itemIndex > 0 && (
            <Link
              href={portfolioItems[itemIndex - 1].route}
              className="flex flex-row items-center justify-center text-inherit no-underline transition-opacity duration-500 hover:opacity-60"
              onClick={(event) =>
                goToItemHandler(event, portfolioItems[itemIndex - 1].route)
              }
            >
              <svg
                className="inline w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous Work
            </Link>
          )}
          {portfolioItems.length > itemIndex + 1 && (
            <Link
              href={portfolioItems[itemIndex + 1].route}
              className="flex flex-row items-center justify-center text-inherit no-underline transition-opacity duration-500 hover:opacity-60"
              onClick={(event) =>
                goToItemHandler(event, portfolioItems[itemIndex + 1].route)
              }
            >
              Next Work
              <svg
                className="inline w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default PortfolioItemPage
