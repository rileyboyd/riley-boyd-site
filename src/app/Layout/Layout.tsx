"use client";
import React, { useState } from "react";

import "pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css";
import "flickity/dist/flickity.min.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "./globals.css";

import { Header } from "./Header";
import { MobileNav } from "./MobileNav";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [fullscreenMenuIsOpened, setFullscreenMenuIsOpened] = useState(false);

  const menuIconClickHandler = () => {
    setFullscreenMenuIsOpened(true);
  };

  const closeMobileMenu = () => {
    setFullscreenMenuIsOpened(false);
  };

  return (
    <>
      <div className="wrapper">
        <Header menuIconClickHandler={menuIconClickHandler} />
        <div className="rb-main">{children}</div>
        <Footer />
      </div>
      <MobileNav
        isOpened={fullscreenMenuIsOpened}
        closeBtnHandler={closeMobileMenu}
      />
    </>
  );
};
