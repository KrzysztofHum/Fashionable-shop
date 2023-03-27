import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BiCategoryAlt />
                    <span className="me-5 d-inline-block">Shop Categories</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Laptops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Telephones
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Tablets
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <Link to="/">Home</Link>
                  <Link to="/product">Our Store</Link>
                  <Link to="/">Blogs</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
