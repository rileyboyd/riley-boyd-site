import React, {useEffect,useRef} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { graphql } from 'gatsby';

/** From index.js -- */
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css';
// import 'flickity/dist/flickity.min.css';
// import 'photoswipe/dist/photoswipe.css';
// import 'photoswipe/dist/default-skin/default-skin.css';
// import '../assets/scss/index.scss';
/** end imports from index.js -- */


import TweenMax from 'gsap';

import TimelineMax from 'gsap/TimelineMax';

import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import AboutPhoto from '../assets/images/personal-photo-about-section-md.jpg';

import ReactIcon from '../assets/images/icons/react-brands.svg';
import JsIcon from '../assets/images/icons/js-square-brands.svg';
import Html5Icon from '../assets/images/icons/html5-brands.svg';
import SassIcon from '../assets/images/icons/sass-brands.svg';
import GitIcon from '../assets/images/icons/git-brands.svg';
import Css3Icon from '../assets/images/icons/css3-brands.svg';

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`

// markup
const IndexPage = ({ data }) => {

  let timeline = new TimelineMax({repeat:0});

  const breakpointCheckRef = useRef();

  const aboutRef = useRef();

  const scrollBtnRef = useRef();

  const contactRef = useRef();    


  const getBreakpoint = (checkerEle) => {

      let breakpoint = 'xs';

      let breakpointOpacity = window.getComputedStyle(checkerEle).getPropertyValue("opacity");

      if (breakpointOpacity >= 0.6) {
          breakpoint = 'sm';
      }
      
      if (breakpointOpacity >= 0.8) {
          breakpoint = 'md';
      }

      if (breakpointOpacity >= 0.8) {
          breakpoint = 'lg';
      }

      return breakpoint;

  }

  const scrollToRef = (ref) => {

      window.scrollTo({
          top: ref.current.offsetTop - (getBreakpoint(breakpointCheckRef.current)=='lg'? 101 : 98),
          behavior: 'smooth'
      });

  }

  const scrollToTop = () => {

      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });

  }


  const history = useHistory();
  // let location = useLocation();

  const btnHandler = () => {
      history.push('/portfolio');
  }

  const scrollDownHandler = (event) => {
      event.preventDefault();
      scrollToRef(aboutRef);
  }


  useEffect(()=>{
          
      // Hero text animation:
      // Animate in text, then animate in button

      timeline
          .to('#hero-text-1', 1, {top: 0, opacity: 1},0.5)
          .to('#hero-text-2', 1, {top: 0, opacity: 1},1.75)
          .to('.hero-btn', 0.15, {top: 0, opacity: 1},3)
          .to('#scroll-btn', 0, {display:'block'},3)
          .to('#scroll-btn', 0.15, {opacity: 1},3.5)
      ;
  
  },[]);
  
  // If the URL is for the contact form (which is on the home page), scroll down the page to the form
  /*
  useEffect(()=>{
      if (location.pathname == '/contact/' || location.pathname == '/contact') {
          scrollToRef(contactRef);
      } else {
          scrollToTop();
      }
  },[location.pathname]);
  */

  return (
    <div className="page-home">
       <div className="rb-header-title rb-header-title-full rb-header-title-parallax-opacity">
            <div className="wave" />
            <div className="wave" />
            <div className="rb-header-table">
                <div className="rb-header-table-cell">
                    <div className="container">
                        <h1 className="rb-title display-3"><span id="hero-text-1" className="hero-text-line">Hello, I'm <span className="hero-text-name">Riley&nbsp;Boyd</span>.</span><span id="hero-text-2" className="hero-text-line">I'm a senior front-end<br/>web&nbsp;developer.</span></h1>
                        <Button text="View My Work" onClick={btnHandler} className="mt-15 hero-btn" />
                        <div className="rb-gap"></div>
                        <div className="rb-header-text text-white">
                            <div className="rb-gap-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
               <a onClick={scrollDownHandler} id="scroll-btn" className="rb-header-title-scroll-down text-white" href="#rb-header-title-scroll-down"><span className="pe-7s-angle-down"></span></a>
            </div>
        </div>
        <div className="blog-posts">

          <h4>Wordpress Posts</h4>
          
          {data.allWpPost.edges.map(({ node }) => (
            <div>
              <p>{node.title}</p>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}

        </div>
        <div id="rb-header-title-scroll-down"></div>
        <div className="bg-white" id="about" ref={aboutRef}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 order-md-2 text-left about-me-text">
                        <div className="rb-gap-1"></div>
                        <h2 className="text-center">Nine Years of Professional Experience.</h2>
                        <div className="rb-gap-1"></div>
                        <div className="d-none d-md-block">
                        <p>I build rich user interfaces for the web using modern tools like React/Vue, SASS/CSS3, HTML5, NPM, and Git, and I can write great vanilla Javascript code. I build responsive websites and web apps that work well across browsers and devices, and are optimized to provide a great user experience for mobile, tablet, and desktop users.</p>
                        <p>I have strong design skills, and I am skilled with the Adobe Creative Suite of applications, including Photoshop, Illustrator, and InDesign.</p>
                        <p>I have worked for a variety of agencies/companies in the digital advertising industry, and have had the opportunity to work on websites for some major brands (e.g., Sony, General Motors, Nestle, Volkswagen).</p>
                        <p>I hold a Master of Arts in Humanities Computing (University of Alberta), and an Honours Bachelor of Arts in Multimedia and Fine Art (McMaster University).</p>
                        </div>
                    </div>
                    <div className="col-md-4 order-md-1 pull-md-8 text-left about-me-photo-col">
                         <div className="rb-gap-3 mnt-6 d-none d-md-block d-lg-none" />
                         <img src={AboutPhoto} alt="Photo of Riley" className="about-me-photo" />
                    </div>
                    <div className="col-md-12 text-left d-md-none">
                        <div className="rb-gap-1"></div>
                        <p>I build rich user interfaces for the web using modern tools like React/Vue, SASS/CSS3, HTML5, NPM, and Git, and I can write great vanilla Javascript code. I build responsive websites and web apps that work well across browsers and devices, and are optimized to provide a great user experience for mobile, tablet, and desktop users.</p>
                        <p>I have strong design skills, and I am skilled with the Adobe Creative Suite of applications, including Photoshop, Illustrator, and InDesign.</p>
                        <p>I have worked for a variety of agencies/companies in the digital advertising industry, and have had the opportunity to work on websites for some major brands (e.g., Sony, General Motors, Nestle, Volkswagen).</p>
                        <p>I hold a Master of Arts in Humanities Computing (University of Alberta), and an Honours Bachelor of Arts in Multimedia and Fine Art (McMaster University).</p>
                        <div className="rb-gap-1"></div>
                    </div>
                </div>
            </div>
        </div>


          <div className="rb-box bg-dark-1 text-white" id="skills">
            <div className="rb-gap-3 mnt-6" />
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <h1 className="text-center text-white">Skills</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-lg-4 skill-box">
                  <div className="rb-ibox-1">
                    <div className="rb-ibox-cont">
                      <div className="rb-ibox-title">Javascript</div>
                    </div>
                    <div className="rb-ibox-icon js-icon">
                      <img src={JsIcon} />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-4 skill-box">
                  <div className="rb-ibox-1">
                    <div className="rb-ibox-cont">
                      <div className="rb-ibox-title">React</div>
                    </div>
                    <div className="rb-ibox-icon react-icon">
                      <img src={ReactIcon} />
                    </div>
                  </div>
                </div>   
                <div className="col-6 col-lg-4 skill-box">
                  <div className="rb-ibox-1">
                    <div className="rb-ibox-cont">
                      <div className="rb-ibox-title">SASS</div>
                    </div>
                    <div className="rb-ibox-icon sass-icon">
                      <img src={SassIcon} />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-4 skill-box">
                  <div className="rb-ibox-1">
                    <div className="rb-ibox-cont">
                      <div className="rb-ibox-title">HTML5</div>
                    </div>
                    <div className="rb-ibox-icon html5-icon">
                      <img src={Html5Icon} />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-4 skill-box">
                  <div className="rb-ibox-1">
                    <div className="rb-ibox-cont">
                      <div className="rb-ibox-title">CSS3</div>
                    </div>
                    <div className="rb-ibox-icon css3-icon">
                      <img src={Css3Icon} />
                    </div>
                  </div>
                </div>                 
                <div className="col-6 col-lg-4 skill-box">
                  <div className="rb-ibox-1">
                    <div className="rb-ibox-cont">
                      <div className="rb-ibox-title">Git</div>
                    </div>
                    <div className="rb-ibox-icon git-icon">
                      <img src={GitIcon} />
                    </div>
                  </div>
                </div>                  
              </div>
            </div>
          </div>

   
        <ContactForm ref={contactRef} />

        <div className="breakpoint-check" ref={breakpointCheckRef} />
    </div>
  )
}

export default IndexPage
