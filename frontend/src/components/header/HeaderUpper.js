import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

const HeaderUpper = ({ toggleHamburger }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    console.log(toggleHamburger);
  };
  return (
    <div className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-4 col-lg-2 header-logo">
            <Link className="text-white fs-6" to="/">
              Media-King
            </Link>
          </div>
          <div className="col-12 col-lg-10 col-xl-5 search-bar">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search Product Here..."
                aria-label="Search Product Here..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
          <div className="col-xl-5  col-8 header-upper-links d-flex align-items-center justify-content-between">
            {/* <div>
              <Link
                className="d-flex align-items-center gap-10 text-white"
                to="/compare-product"
              >
                <img src="images/compare.svg" alt="compare" />
                <p className="mb-0 header-upper-links-text">
                  Compare <br /> Products
                </p>
              </Link>
            </div> */}
            <div>
              <Link
                className="d-flex align-items-center gap-10 text-white"
                to="/wishlist"
              >
                <AiOutlineHeart />
                <p className="mb-0  header-upper-links-text">
                  Favourite <br /> wishlist
                </p>
              </Link>
            </div>
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary bg-transparent border-0 p-1 d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineUser />
                  <span className="mb-0  header-upper-links-text">
                    {user.firstname}
                  </span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {user.role === "admin" && (
                    <li>
                      <Link
                        className="dropdown-item text-white"
                        onClick={console.log("createItem")}
                      >
                        Create item
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      className="dropdown-item text-white"
                      onClick={onLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link
                  className="d-flex align-items-center gap-10 text-white"
                  to="/signin"
                >
                  <img src="images/user.svg" alt="user" />
                  <p className="mb-0">
                    Login <br /> My Account
                  </p>
                </Link>
              </div>
            )}
            <div>
              <Link
                className="d-flex align-items-center gap-10 text-white"
                to="/cart"
              >
                <img src="images/cart.svg" alt="cart" />
                <div className="d-flex flex-column">
                  <span className="badge bg-white text-dark">0</span>

                  <p className="mb-0">$ 100</p>
                </div>
              </Link>
            </div>
            <div className="hamburger-menu">
              <button onClick={toggleHamburger}>
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUpper;
