import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineLaptop,
  AiOutlineRight,
  AiOutlineTablet,
} from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";

const HeaderMobile = ({ toggleHamburger, hamburgerOpen }) => {
  return (
    <div
      className={hamburgerOpen ? "header-mobile" : "header-mobile-active p-3"}
    >
      <div className="header-mobile-menu d-flex justify-content-between border-bottom pb-3">
        <div>Menu</div>
        <button onClick={toggleHamburger}>X</button>
      </div>
      <nav className="header-mobile-nav">
        <ul className="px-0 py-3">
          <li className="py-1">
            <Link to="/">
              <AiOutlineLaptop />
              <div>Laptop</div>
              <AiOutlineRight className="ms-auto" />
            </Link>
          </li>
          <li className="py-1">
            <Link to="/">
              <BsPhoneVibrate />
              <div>Telephone</div>
              <AiOutlineRight className="ms-auto" />
            </Link>
          </li>
          <li className="py-1">
            <Link to="">
              <AiOutlineTablet />
              <Link to="/">Tablet</Link>
              <AiOutlineRight className="ms-auto" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobile;
