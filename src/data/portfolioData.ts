import React from 'react'

export interface PortfolioItem {
  title: string
  subheading: string
  thumbnail: string
  images: string[]
  type: string
  route: string
  description: string
  year: string
  company: string
  role: string
  tech: string
  id: string
  url: string
}

function getPortfolioData(): PortfolioItem[] {
  let data: PortfolioItem[] = [
    {
      title: 'Trending Sloth',
      subheading:
        'Content website, with entertaining articles, videos, and photo galleries.',
      thumbnail: '/portfolio-items/portfolio-trending-sloth-sm.jpg',
      images: [
        '/portfolio-items/portfolio-trending-sloth-1.jpg',
        '/portfolio-items/portfolio-trending-sloth-2.jpg',
      ],
      type: 'Content website',
      route: '/portfolio/trending-sloth',
      description:
        "As the lead designer and front-end developer on this project, I designed the layout, typography, and user experience of the site. I created HTML mockups for approval by the Marketing team, to show how the site would look on desktop, tablet, and mobile. Once the design was approved, I built the site using Javascript, HTML, SCSS, and Smarty templating to render the site's content (provided by the backend).",
      year: '2019',
      company: 'AwareAds',
      role: 'Lead Designer and Front-end Developer',
      tech: 'Javascript, HTML, SCSS, Smarty Templating',
      id: 'trending-sloth',
      url: '',
    },
    {
      title: 'Cheestrings',
      subheading: 'Scrolling adventure website to promote Cheestrings snacks.',
      thumbnail: '/portfolio-items/portfolio-cheestrings-sm.jpg',
      images: [
        '/portfolio-items/portfolio-cheestrings-1.jpg',
        '/portfolio-items/portfolio-cheestrings-2.jpg',
        '/portfolio-items/portfolio-cheestrings-3.jpg',
      ],
      type: 'Scrolling Adventure',
      route: '/portfolio/cheestrings',
      description:
        'As one of the Front-end developers on this project, I worked with the Greensock animation library to add animated interactive elements to this underwater-themed one page scroller. The elements are animated on a timeline, and the timeline is controlled by how far the user has scrolled down the page.',
      year: '2017',
      company: 'Isobar',
      role: 'Front-end Developer',
      tech: 'Javascript, HTML, CSS',
      id: 'cheestrings',
      url: 'http://cheestrings.ca',
    },
    {
      title: 'Communa',
      subheading: 'Market research survey platform.',
      thumbnail: '/portfolio-items/portfolio-communa-sm.jpg',
      images: [
        '/portfolio-items/portfolio-communa-1.jpg',
        '/portfolio-items/portfolio-communa-2.jpg',
      ],
      type: 'Research Survey Platform',
      route: '/portfolio/communa',
      description:
        'As a front-end developer/designer on this project, I do ongoing maintenance work on this site. This includes designing and adding new UI elements, updating the javascript so the site functions well, and adding user analytics tracking.',
      year: '2018-2019',
      company: 'AwareAds',
      role: 'Front-end Developer, Design work',
      tech: 'Javascript, HTML, CSS',
      id: 'communa',
      url: 'http://communa.com',
    },
    {
      title: 'Sony Rewards',
      subheading:
        'Platform where users can track and redeem rewards for their Sony account.',
      thumbnail: '/portfolio-items/portfolio-sony-rewards-sm.jpg',
      images: [
        '/portfolio-items/portfolio-sony-rewards-1.jpg',
        '/portfolio-items/portfolio-sony-rewards-2.jpg',
      ],
      type: 'Rewards Portal',
      route: '/portfolio/sony-rewards',
      description:
        'I worked on the profile section of this site. In the profile section, users add their account information and preferences. I built a "branching" form where users could select their preferences for games, music, and movies.',
      year: '2014',
      company: 'Klick Health',
      role: 'Front-end Developer',
      tech: 'Javascript, HTML, CSS',
      id: 'sony-rewards',
      url: 'https://rewards.sony.com/',
    },
    {
      title: 'Made with Nestle',
      subheading: 'Website with recipes made with Nestle products.',
      thumbnail: '/portfolio-items/portfolio-nestle-sm.jpg',
      images: [
        '/portfolio-items/portfolio-nestle-3.jpg',
        '/portfolio-items/portfolio-nestle-1.jpg',
        '/portfolio-items/portfolio-nestle-2.jpg',
      ],
      type: 'Recipe Website',
      route: '/portfolio/made-with-nestle',
      description:
        'As one of the front-end developers working on this site, I worked on features such as the recipe pages and the home page. I did javascript work, and added styles using the Stylus CSS preprocessor.',
      year: '2016',
      company: 'OneMethod',
      role: 'Front-end Developer',
      tech: 'Javascript, HTML, Stylus',
      id: 'made-with-nestle',
      url: 'https://madewithnestle.ca',
    },
    {
      title: 'Toronto Sierra Elevation',
      subheading: 'Landing page for the Toronto Sierra Elevation sale.',
      thumbnail: '/portfolio-items/portfolio-gmc-sierra-sm.jpg',
      images: [
        '/portfolio-items/portfolio-gmc-sierra-1.jpg',
        '/portfolio-items/portfolio-gmc-sierra-2.jpg',
      ],
      type: 'Dealership Sale Landing Page',
      route: '/portfolio/toronto-gmc-sierra',
      description:
        'Traffic from paid advertisements for the GM Toronto Sierra Elevation sale went to this landing page. I was the sole developer of this landing page. I added analytics tracking to measure conversions (Google Analytics, Facebook pixels, and Floodlight pixels), I used the Youtube API to control videos in javascript, and I added a dealership map using the Google Maps API.',
      year: '2016',
      company: 'Isobar',
      role: 'Front-end Developer',
      tech: 'Javascript, HTML, CSS',
      id: 'toronto-gmc-sierra',
      url: 'http://torontosierraelevation.com',
    },
    {
      title: 'Trintellix',
      subheading: 'Website for medication for Major Depressive Disorder.',
      thumbnail: '/portfolio-items/portfolio-brintellix-sm.jpg',
      images: [
        '/portfolio-items/portfolio-brintellix-1.jpg',
        '/portfolio-items/portfolio-brintellix-2.jpg',
      ],
      type: 'Medication Website',
      route: '/portfolio/trintellix',
      description:
        'I was one of the front-end developers that worked on this site. I added content with HTML, styling with CSS, and used Javascript where necessary.',
      year: '2013',
      company: 'Klick Health',
      role: 'Front-end Developer',
      tech: 'Javascript, HTML, CSS',
      id: 'trintellix',
      url: 'http://us.trintellix.com',
    },
    {
      title: 'Spark Change Today',
      subheading:
        'Community website where users could nominate community members as "Sparks", who would be shown on the site.',
      thumbnail: '/portfolio-items/portfolio-spark-change-sm.jpg',
      images: [
        '/portfolio-items/portfolio-spark-change-1.jpg',
        '/portfolio-items/portfolio-spark-change-2.jpg',
      ],
      type: 'Community Website',
      route: '/portfolio/spark-change',
      description:
        'I was the sole developer of this website for its initial launch. I built a custom Wordpress theme for this site from scratch. Using the Google Maps API, I created a searchable map that allowed users to search for Community Living Ontario locations by postal code. The site had a form used to nominate Sparks, who would then be displayed on the site (after admin approval in the Wordpress backend). Note: This site is no longer active.',
      year: '2014',
      company: 'KPDI',
      role: 'Lead Web Developer',
      tech: 'Javascript, Custom Wordpress Theme, HTML, CSS',
      id: 'spark-change',
      url: '',
    },
    {
      title: 'Astellas Education Resource Portal',
      subheading:
        'Web portal where doctors and patients can access informational documents.',
      thumbnail: '/portfolio-items/portfolio-astellas-perp-sm.jpg',
      images: [
        '/portfolio-items/portfolio-astellas-perp-1.jpg',
        '/portfolio-items/portfolio-astellas-perp-2.jpg',
      ],
      type: 'Medical Information Portal',
      route: '/portfolio/astellas-patient-portal',
      description:
        'I was the lead front-end developer on this project. Using HTML and CSS, I made the site match the designs that were provided by the Creative department. I added functionality with Javascript, using AJAX calls to get data from the backend created by the backend developer. This site was designed for desktop only, so it is not responsive.',
      year: '2016',
      company: 'Klick Health',
      role: 'Lead Front-end Developer',
      tech: 'Javascript, HTML, CSS',
      id: 'astellas-patient-portal',
      url: 'http://astellasresources.com',
    },
  ]

  return data
}

export default getPortfolioData
