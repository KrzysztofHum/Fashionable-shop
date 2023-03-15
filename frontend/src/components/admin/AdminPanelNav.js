import {
  AiOutlineDashboard,
  AiOutlineFileText,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const AdminPanelNav = () => {
  return (
    <nav className="admin-nav">
      <ul className="p-1">
        <li>
          <div className="admin-nav-dropdown d-flex align-items-center px-4 py-2">
            <span className="fs-4">
              <AiOutlineDashboard />
            </span>
            <span className="w-100 px-2 fs-5">Dashboard</span>
            <span className="fs-3">
              <RiArrowDropDownLine />
            </span>
          </div>
        </li>
        <li>
          <div className="admin-nav-dropdown d-flex align-items-center px-4 py-2">
            <span className="fs-4">
              <AiOutlineUser />
            </span>
            <span className="w-100 px-2 fs-5">Customers</span>
            <span className="fs-3">
              <RiArrowDropDownLine />
            </span>
          </div>
        </li>
        <li>
          <div className="admin-nav-dropdown d-flex align-items-center px-4 py-2">
            <span className="fs-4">
              <AiOutlineShoppingCart />
            </span>
            <span className="w-100 px-2 fs-5">Create item</span>
            <span className="fs-3">
              <RiArrowDropDownLine />
            </span>
          </div>
        </li>
        <li>
          <div className="admin-nav-dropdown d-flex align-items-center px-4 py-2">
            <span className="fs-4">
              <AiOutlineFileText />
            </span>
            <span className="w-100 px-2 fs-5">Blogs</span>
            <span className="fs-3">
              <RiArrowDropDownLine />
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default AdminPanelNav;
