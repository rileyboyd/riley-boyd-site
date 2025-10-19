'use client'
import React, { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import getPortfolioData from '../../../data/portfolioData'

const PortfolioItemPage = () => {
  const router = useRouter()
  const params = useParams()

  // Load portfolio data directly
  const portfolioData = getPortfolioData()

  // When the page loads, start the scroll at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getPortfolioItemData = (id: string): number => {
    for (let i = 0; i < portfolioData.length; i++) {
      if (portfolioData[i].id === id) {
        return i
      }
    }
    return -1 // Return -1 if not found
  }

  const goToItemHandler = (event: React.MouseEvent, url: string) => {
    event.preventDefault()
    router.push(url)
    window.scrollTo(0, 0)
  }

  if (!params?.name) {
    return <div>Loading...</div>
  }

  const itemIndex = getPortfolioItemData(params.name as string)
  const currentItem = portfolioData[itemIndex]

  if (!currentItem) {
    return <div>Portfolio item not found</div>
  }

  return (
    <>
      <div className="container-fluid">
        <div className="rb-portfolio-single rb-portfolio-single-half">
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <div className="rb-sidebar-sticky" data-offset-top={0}>
                <div className="rb-portfolio-info">
                  <h1 className="rb-portfolio-title display-4">
                    {currentItem.title}
                  </h1>
                  <div className="rb-portfolio-text">
                    <h4>{currentItem.subheading}</h4>
                    {currentItem.description}
                  </div>
                  <table className="rb-portfolio-details">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Role:</strong>
                        </td>
                        <td>{currentItem.role}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tech used:</strong>
                        </td>
                        <td>{currentItem.tech}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Company:</strong>
                        </td>
                        <td>{currentItem.company}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Year</strong>
                        </td>
                        <td>{currentItem.year}</td>
                      </tr>
                      {currentItem.url && (
                        <tr>
                          <td>
                            <strong>URL</strong>
                          </td>
                          <td>
                            <a
                              href={currentItem.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {currentItem.url}
                            </a>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rb-portfolio-images">
                {currentItem.images.map((image, index) => (
                  <Image
                    key={`portfolio-item-img-${index}`}
                    src={image}
                    alt={`${currentItem.title} - Image ${index + 1}`}
                    width={800}
                    height={600}
                    style={{ width: '100%', height: 'auto' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rb-pagination rb-pagination-center">
        <div className="container">
          {itemIndex > 0 && (
            <Link
              href={portfolioData[itemIndex - 1].route}
              className="rb-pagination-prev"
              onClick={(event) =>
                goToItemHandler(event, portfolioData[itemIndex - 1].route)
              }
            >
              <span className="pe-7s-angle-left arrow"></span> Prev
              <span className="hide-text">ious Work</span>
            </Link>
          )}
          {portfolioData.length > itemIndex + 1 && (
            <Link
              href={portfolioData[itemIndex + 1].route}
              className="rb-pagination-next"
              onClick={(event) =>
                goToItemHandler(event, portfolioData[itemIndex + 1].route)
              }
            >
              Next<span className="hide-text"> Work </span>
              <span className="pe-7s-angle-right arrow" />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default PortfolioItemPage
