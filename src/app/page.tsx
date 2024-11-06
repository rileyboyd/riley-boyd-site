"use client";
import React, { useEffect, useRef, MutableRefObject, UIEvent } from "react";
import gsap from "gsap";
import Image from "next/image";

import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const timeline = gsap.timeline({ repeat: 0 });

  const breakpointCheckRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const getBreakpoint = (checkerEle: HTMLElement): string => {
    let breakpointOpacity = Number(
      window.getComputedStyle(checkerEle).getPropertyValue("opacity")
    );

    if (breakpointOpacity == 1) {
      return "lg";
    }

    if (breakpointOpacity == 0.8) {
      return "md";
    }

    if (breakpointOpacity == 0.6) {
      return "sm";
    }

    return "xs";
  };

  const scrollToRef = (
    refToScrollTo: MutableRefObject<HTMLElement | null>
  ): void => {
    if (!refToScrollTo.current || !breakpointCheckRef.current) {
      return;
    }

    const currentBreakpoint = getBreakpoint(breakpointCheckRef.current);
    const offset = currentBreakpoint == "lg" ? 101 : 98;

    window.scrollTo({
      top: refToScrollTo.current.offsetTop - offset,
      behavior: "smooth",
    });
  };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  const btnHandler = () => {
    // history.push("/portfolio");
  };

  const scrollDownHandler = (event: UIEvent<HTMLElement>): void => {
    event.preventDefault();
    scrollToRef(aboutRef);
  };

  useEffect(() => {
    // Hero text animation:
    // Animate in text, then animate in button

    timeline
      .to("#hero-text-1", 1, { top: 0, opacity: 1 }, 0.5)
      .to("#hero-text-2", 1, { top: 0, opacity: 1 }, 1.75)
      .to(".hero-btn", 0.15, { top: 0, opacity: 1 }, 3)
      .to("#scroll-btn", 0, { display: "block" }, 3)
      .to("#scroll-btn", 0.15, { opacity: 1 }, 3.5);
  }, []);

  // If the URL is for the contact form (which is on the home page), scroll down the page to the form
  // useEffect(() => {
  //   if (location.pathname == "/contact/" || location.pathname == "/contact") {
  //     scrollToRef(contactRef);
  //   } else {
  //     scrollToTop();
  //   }
  // }, [location.pathname]);

  return (
    <div className="page-home">
      <div className="rb-header-title rb-header-title-full rb-header-title-parallax-opacity">
        <div className="wave" />
        <div className="wave" />
        <div className="rb-header-table">
          <div className="rb-header-table-cell">
            <div className="container">
              <h1 className="rb-title display-3">
                <span id="hero-text-1" className="hero-text-line">
                  Hello, I'm{" "}
                  <span className="hero-text-name">Riley&nbsp;Boyd</span>.
                </span>
                <span id="hero-text-2" className="hero-text-line">
                  I'm a senior front-end
                  <br />
                  web&nbsp;developer.
                </span>
              </h1>
              <Button
                text="View My Work"
                onClick={btnHandler}
                className="mt-15 hero-btn"
              />
              <div className="rb-gap"></div>
              <div className="rb-header-text text-white">
                <div className="rb-gap-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a
            onClick={scrollDownHandler}
            id="scroll-btn"
            className="rb-header-title-scroll-down text-white"
            href="#rb-header-title-scroll-down"
          >
            <span className="pe-7s-angle-down"></span>
          </a>
        </div>
      </div>
      <div id="rb-header-title-scroll-down"></div>
      <div className="bg-white" id="about" ref={aboutRef}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-md-2 text-left about-me-text">
              <div className="rb-gap-1"></div>
              <h2 className="text-center">
                Ten Years of Professional Experience.
              </h2>
              <div className="rb-gap-1"></div>
              <div className="d-none d-md-block">
                <p>
                  I build rich user interfaces for the web using modern tools
                  like React/Vue, SASS/CSS3, HTML5, NPM, and Git, and I can
                  write great vanilla Javascript code. I build responsive
                  websites and web apps that work well across browsers and
                  devices, and are optimized to provide a great user experience
                  for mobile, tablet, and desktop users.
                </p>
                <p>
                  I have strong design skills, and I am skilled with the Adobe
                  Creative Suite of applications, including Photoshop,
                  Illustrator, and InDesign.
                </p>
                <p>
                  I have worked for a variety of agencies/companies in the
                  digital advertising industry, and have had the opportunity to
                  work on websites for some major brands (e.g., Sony, General
                  Motors, Nestle, Volkswagen).
                </p>
                <p>
                  I hold a Master of Arts in Humanities Computing (University of
                  Alberta), and an Honours Bachelor of Arts in Multimedia and
                  Fine Art (McMaster University).
                </p>
              </div>
            </div>
            <div className="col-md-4 order-md-1 pull-md-8 text-left about-me-photo-col">
              <div className="rb-gap-3 mnt-6 d-none d-md-block d-lg-none" />
              <Image
                width="200"
                height="200"
                src="/images/personal-photo-about-section-md.jpg"
                alt="Photo of Riley"
                className="about-me-photo"
              />
            </div>
            <div className="col-md-12 text-left d-md-none">
              <div className="rb-gap-1"></div>
              <p>
                I build rich user interfaces for the web using modern tools like
                React/Vue, SASS/CSS3, HTML5, NPM, and Git, and I can write great
                vanilla Javascript code. I build responsive websites and web
                apps that work well across browsers and devices, and are
                optimized to provide a great user experience for mobile, tablet,
                and desktop users.
              </p>
              <p>
                I have strong design skills, and I am skilled with the Adobe
                Creative Suite of applications, including Photoshop,
                Illustrator, and InDesign.
              </p>
              <p>
                I have worked for a variety of agencies/companies in the digital
                advertising industry, and have had the opportunity to work on
                websites for some major brands (e.g., Sony, General Motors,
                Nestle, Volkswagen).
              </p>
              <p>
                I hold a Master of Arts in Humanities Computing (University of
                Alberta), and an Honours Bachelor of Arts in Multimedia and Fine
                Art (McMaster University).
              </p>
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
                  <Image
                    width="200"
                    height="200"
                    src="/images/icons/js-square-brands.svg"
                    alt="Javascript Icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 skill-box">
              <div className="rb-ibox-1">
                <div className="rb-ibox-cont">
                  <div className="rb-ibox-title">React</div>
                </div>
                <div className="rb-ibox-icon react-icon">
                  <Image
                    width="200"
                    height="200"
                    src="/images/icons/react-brands.svg"
                    alt="React Icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 skill-box">
              <div className="rb-ibox-1">
                <div className="rb-ibox-cont">
                  <div className="rb-ibox-title">SASS</div>
                </div>
                <div className="rb-ibox-icon sass-icon">
                  <Image
                    width="200"
                    height="200"
                    src="/images/icons/sass-brands.svg"
                    alt="SASS Icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 skill-box">
              <div className="rb-ibox-1">
                <div className="rb-ibox-cont">
                  <div className="rb-ibox-title">HTML5</div>
                </div>
                <div className="rb-ibox-icon html5-icon">
                  <Image
                    width="200"
                    height="200"
                    src="/images/icons/html5-brands.svg"
                    alt="HTML5 Icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 skill-box">
              <div className="rb-ibox-1">
                <div className="rb-ibox-cont">
                  <div className="rb-ibox-title">CSS3</div>
                </div>
                <div className="rb-ibox-icon css3-icon">
                  <Image
                    width="200"
                    height="200"
                    src="/images/icons/css3-brands.svg"
                    alt="CSS3 Icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 skill-box">
              <div className="rb-ibox-1">
                <div className="rb-ibox-cont">
                  <div className="rb-ibox-title">Git</div>
                </div>
                <div className="rb-ibox-icon git-icon">
                  <Image
                    width="200"
                    height="200"
                    src="/images/icons/git-brands.svg"
                    alt="Git Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection ref={contactRef} />

      <div className="breakpoint-check" ref={breakpointCheckRef} />
    </div>
  );
}
