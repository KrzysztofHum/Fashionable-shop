import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderUpper from "./HeaderUpper";
import HeaderMobile from "./HeaderMobile";
import { useState } from "react";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState("false");
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (hamburgerOpen) {
      document.body.setAttribute("style", "overflow: visible");
    } else {
      document.body.setAttribute("style", "overflow: hidden");
    }
  };
  return (
    <header>
      <HeaderTop />
      <HeaderUpper toggleHamburger={toggleHamburger} />
      <HeaderBottom />
      <HeaderMobile
        toggleHamburger={toggleHamburger}
        hamburgerOpen={hamburgerOpen}
      />
    </header>
  );
};

export default Header;
