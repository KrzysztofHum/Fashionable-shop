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
      document.body.setAttribute(
        "style",
        "overflow: visible; position: static;"
      );
    } else {
      document.body.setAttribute("style", "overflow: hidden; position: fixed;");
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
