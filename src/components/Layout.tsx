import React, { useState } from "react";

import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

export default Layout;
