import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillRead,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineRight,
  AiOutlineShop,
  AiOutlineTablet,
} from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";

const HeaderMobile = ({ toggleHamburger, hamburgerOpen }) => {
  return (
    <div
      className={
        hamburgerOpen ? "header-mobile" : "header-mobile-active p-3 fs-3"
      }
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
        <li>
          <ul className="px-0 border-top pt-3">
            <li className="py-1">
              <Link to="">
                <AiOutlineHome />
                <Link to="/">Home</Link>
                <AiOutlineRight className="ms-auto" />
              </Link>
            </li>
            <li className="py-1">
              <Link to="">
                <AiOutlineShop />
                <Link to="/">Our Store</Link>
                <AiOutlineRight className="ms-auto" />
              </Link>
            </li>
            <li className="py-1">
              <Link to="">
                <AiFillRead />
                <Link to="/">Blogs</Link>
                <AiOutlineRight className="ms-auto" />
              </Link>
            </li>
            <li className="py-1">
              <Link to="">
                <MdContactMail />
                <Link to="/">Contact</Link>
                <AiOutlineRight className="ms-auto" />
              </Link>
            </li>
          </ul>
        </li>
      </nav>
    </div>
  );
};

export default HeaderMobile;
