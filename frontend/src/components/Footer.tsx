import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  ul. Świętojańska 33/1,
                  <br /> Gdynia, Pomorskie
                  <br /> 11-222
                </address>
                <a
                  href="tel: +48 237953123"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +48 237953123
                </a>
                <a
                  href="mailto: mediaking3232@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  mediaking3232@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="/" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="/" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="/" className="text-white">
                    <BsGithub className="fs-4" />
                  </a>
                  <a href="/" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-3 mb-1" to="">
                  Privacy Policy
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Refund Policy
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Shipping Policy
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Accpunt</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-3 mb-1" to="">
                  About Us
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Faq
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-3 mb-1" to="">
                  Laptops
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Headphones
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Tablets
                </Link>
                <Link className="text-white py-3 mb-1" to="">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Krzysztof Humienny
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
