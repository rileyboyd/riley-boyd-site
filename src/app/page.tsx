"use client";
import React, { useEffect, useRef, MutableRefObject, UIEvent } from "react";
import gsap from "gsap";
import Image from "next/image";

import { Button } from "@/components/Button";
import ContactSection from "@/components/ContactSection";

import { getNumberOfYearsSinceDate } from "@/utils/getNumberOfYearsSinceDate";
import { skillIcons } from "./skillIcons";

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

  const numberOfYearsSinceIStartedWorking = getNumberOfYearsSinceDate(
    "2011-07-11T00:00:00"
  );

  const mainContent = (
    <>
      <p>
        I build rich user interfaces for the web using modern tools like
        React/Vue, SASS/CSS3, HTML5, NPM, and Git, and I can write great vanilla
        Javascript code. I build responsive websites and web apps that are
        well-tested, work well across browsers, and are optimized to provide a
        great user experience for mobile, tablet, and desktop users.
      </p>
      <p>
        I have strong design skills, and I am skilled with Figma and the Adobe
        Creative Suite of applications, including Photoshop, Illustrator, and
        InDesign.
      </p>
      <p>
        My most recent role was as a Frontend Engineer at Amazon, where I worked
        on applications for Amazon Marketing Cloud. I have also worked for a
        variety of companies/agencies in the digital advertising sector, and
        have had the opportunity to work on websites for some major brands
        (e.g., Sony, General Motors, Nestle, Volkswagen).
      </p>
      <p>
        I hold a Master of Arts in Humanities Computing (University of Alberta),
        and an Honours Bachelor of Arts in Multimedia and Fine Art (McMaster
        University).
      </p>
    </>
  );

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
              <Button onClick={btnHandler} className="mt-15 hero-btn">
                View My Work
              </Button>
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
                {numberOfYearsSinceIStartedWorking} Years of Professional
                Experience.
              </h2>
              <div className="rb-gap-1"></div>
              <div className="d-none d-md-block">{mainContent}</div>
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
              {mainContent}
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
            {skillIcons.map(({ fileName, title, altText, className }) => (
              <div className="col-6 col-lg-4 skill-box" key={className}>
                <div className="rb-ibox-1">
                  <div className="rb-ibox-cont">
                    <div className="rb-ibox-title">{title}</div>
                  </div>
                  <div className={`rb-ibox-icon ${className}`}>
                    <Image
                      width="200"
                      height="200"
                      src={`/images/icons/${fileName}`}
                      alt={altText}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactSection ref={contactRef} />

      <div className="breakpoint-check" ref={breakpointCheckRef} />
    </div>
  );
}
