import React, { useState, useEffect } from "react";
import Image from "next/image";

import Nav from "./Nav";

interface HeaderProps {
  menuIconClickHandler: (event: string) => void;
}

const Header: React.FC<HeaderProps> = ({ menuIconClickHandler }) => {
  // If the page is the home page (location == '/'), add sticky nav
  const [hasStickyNav /*, setHasStickyNav*/] = useState(false);

  /*
  useEffect(() => {
    setHasStickyNav(
      location.pathname == "/" ||
        location.pathname == "/contact/" ||
        location.pathname == "/contact"
    );
  }, [location.pathname]);
  */
  return (
    <header className={`rb-header ${hasStickyNav ? "rb-header-over" : ""}`}>
      <Nav
        useSticky={hasStickyNav}
        menuIconClickHandler={menuIconClickHandler}
      />
    </header>
  );
};

export default Header;
