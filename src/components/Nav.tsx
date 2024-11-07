import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { debounce } from "@/utils/debounce";

interface NavProps {
  useSticky: boolean;
  menuIconClickHandler: (event: string) => void;
}

const Nav: React.FC<NavProps> = ({ menuIconClickHandler, useSticky }) => {
  const [isSticky, setSticky] = useState(false);
  const stickyRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (stickyRef.current) {
      window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
        ? setSticky(true)
        : setSticky(false);
    }
  };

  const navbarToggleHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    menuIconClickHandler("test");
  };

  const getSelectedNavIndex = () => {
    let selectedIndex = 3;
    if (location.pathname == "/") {
      selectedIndex = 0;
    } else if (location.pathname.substring(0, 10) == "/portfolio") {
      selectedIndex = 1;
    } else if (
      location.pathname == "/contact/" ||
      location.pathname == "/contact"
    ) {
      selectedIndex = 2;
    }
    return selectedIndex;
  };

  const [selectedNavIndex, setSelectedNavIndex] = useState(
    getSelectedNavIndex()
  );

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setSelectedNavIndex(getSelectedNavIndex());
  }, [location.pathname]);

  return (
    <nav
      ref={stickyRef}
      className={`rb-navbar rb-navbar-top ${
        useSticky
          ? "rb-navbar-autohide rb-navbar-transparent rb-navbar-white-text-on-top rb-onscroll-show"
          : ""
      } ${useSticky && isSticky ? "rb-navbar-solid rb-navbar-fixed" : ""}`}
    >
      <div className="container">
        <div className="rb-nav-table">
          <a href="#" className="rb-nav-logo">
            <Image
              src="/images/rb-logo-light.svg"
              alt=""
              width="140"
              className="rb-nav-logo-onscroll"
            />
            <Image src="/images/rb-logo.svg" alt="" width="140" />
          </a>
          <ul
            className="rb-nav rb-nav-right d-none d-lg-block"
            data-nav-mobile="#rb-nav-mobile"
          >
            <li
              className={`rb-drop-item ${
                selectedNavIndex == 0 ? "active" : ""
              }`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`rb-drop-item ${
                selectedNavIndex == 1 ? "active" : ""
              }`}
            >
              <a href="/portfolio/">Portfolio</a>
            </li>
            <li
              className={`rb-drop-item ${
                selectedNavIndex == 2 ? "active" : ""
              }`}
            >
              <a href="/contact/">Contact</a>
            </li>
          </ul>
          <ul className="rb-nav rb-nav-right rb-nav-icons">
            <li className="single-icon d-lg-none">
              <a
                href="#"
                className="rb-navbar-full-toggle"
                onClick={navbarToggleHandler}
              >
                <span className="rb-icon-burger">
                  <span className="rb-t-1"></span>
                  <span className="rb-t-2"></span>
                  <span className="rb-t-3"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
