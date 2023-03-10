import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const HeaderUpper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link className="text-white" to="/">
                Media-King
              </Link>
            </h2>
          </div>
          <div className="col-8 col-lg-5 search-bar">
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
          <div className="col-xl-5 col-6 header-upper-links d-flex align-items-center justify-content-between">
            <div>
              <Link
                className="d-flex align-items-center gap-10 text-white"
                to="/compare-product"
              >
                <img src="images/compare.svg" alt="compare" />
                <p className="mb-0">
                  Compare <br /> Products
                </p>
              </Link>
            </div>
            <div>
              <Link
                className="d-flex align-items-center gap-10 text-white"
                to="/wishlist"
              >
                <img src="images/wishlist.svg" alt="wishlist" />
                <p className="mb-0">
                  Favourite <br /> wishlist
                </p>
              </Link>
            </div>
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="images/user.svg" alt="user" />
                  <span className="mb-0">{user.firstname}</span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
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
                <div className="d-flex flex-column gap-10">
                  <span className="badge bg-white text-dark">0</span>

                  <p className="mb-0">$ 100</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUpper;
