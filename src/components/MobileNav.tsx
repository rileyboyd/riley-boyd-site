import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import tween from "gsap";

interface MobileNavProps {
  closeBtnHandler: () => void;
  isOpened: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeBtnHandler, isOpened }) => {
  const showNavbarStyles = {
    display: "block",
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
  };

  const navbarFullRef = useRef(null);
  const navSociallRef = useRef(null);

  // Use Refs to get the DOM elements needed for the menu animations
  const navbar = navbarFullRef.current;
  const navbarSocial = navSociallRef.current;

  const navbarMenuItems = document.querySelectorAll(
    ".rb-navbar-mobile-content >.rb-nav > li > a"
  );

  const openFullscreenNavbar = () => {
    // Animate in the links in the menu
    tween.set(navbarMenuItems, {
      opacity: 0,
      force3D: true,
    });

    if (!navbarSocial || !navbar) {
      return;
    }

    tween.set(navbarSocial, {
      opacity: 0,
      force3D: true,
    });

    tween.to(navbar, 0.5, {
      opacity: 1,
      force3D: true,
      display: "block",
      onComplete() {},
    });

    /*
    tween.staggerTo(
      navbarMenuItems,
      0.2,
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
      },
      0.05
    );
    */

    tween.to(navbarSocial, 0.3, {
      y: 0,
      opacity: 1,
      delay: 0.4,
    });
  };

  const closeFullscreenNavbar = () => {
    // Set the opacity of the links in the menu back to 0
    tween.set([navbarMenuItems, navbarSocial], {
      opacity: 0,
      force3D: true,
    });
  };

  // When the "isOpened" prop on the parent changes, call the appropriate menu function
  useEffect(() => {
    if (isOpened) {
      openFullscreenNavbar();
    } else {
      closeFullscreenNavbar();
    }
  }, [isOpened, openFullscreenNavbar, closeFullscreenNavbar]);

  return (
    <nav
      ref={navbarFullRef}
      className="rb-navbar rb-navbar-full rb-navbar-align-center"
      id="rb-nav-mobile"
      style={isOpened ? showNavbarStyles : {}}
    >
      <div className="rb-navbar-bg">
        <div
          className="bg-image"
          style={{ backgroundImage: "url('assets/images/bg-menu.jpg')" }}
        ></div>
      </div>
      <div className="rb-nav-table">
        <div className="rb-nav-row">
          <div className="container">
            <div className="rb-nav-header">
              <div className="rb-nav-logo">
                <Link href="/" className="rb-nav-logo">
                  <Image src="/images/logo-light.svg" alt="" width="85" />
                </Link>
              </div>
              <button
                className={`rb-nav-close rb-navbar-full-toggle ${
                  isOpened ? "active" : ""
                }`}
                onClick={closeBtnHandler}
              >
                <span className="rb-icon-close"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="rb-nav-row-full rb-nav-row">
          <div className="nano">
            <div className="nano-content">
              <div className="rb-nav-table">
                <div className="rb-nav-row rb-nav-row-full rb-nav-row-center rb-navbar-mobile-content">
                  <ul className="rb-nav">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/portfolio/">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="/contact/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rb-nav-row">
          <div className="container">
            <div className="rb-nav-social" ref={navSociallRef}>
              <ul>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/rileyboyd/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/riley_boyd" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
