import React from "react";

const HeaderMobile = ({ toggleHamburger, hamburgerOpen }) => {
  return (
    <div
      className="header-mobile"
      style={{ display: hamburgerOpen ? "block" : "none" }}
    >
      <div>
        <div>Menu</div>
        <button onClick={toggleHamburger}>X</button>
      </div>
      <nav>
        <ul>
          <li>xd</li>
          <li>23231</li>
          <li>test3</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobile;
