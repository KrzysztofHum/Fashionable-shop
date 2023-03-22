import React from "react";
import { BsTextIndentRight } from "react-icons/bs";

const AdminPanelHeader = () => {
  return (
    <header className="admin-header d-flex">
      <div className=" fw-bold text-white admin-header-logo col-2 d-flex justify-content-center align-items-center fs-4">
        Admin Panel
      </div>
      <div className="admin-header-main px-5 py-2 d-flex justify-content-between col-10">
        <div className=" d-flex justify-content-center align-items-center">
          <BsTextIndentRight className="fs-2" />
        </div>
        <div className="d-flex justify-content-center align-items-center p-2">
          <img
            src="images/main-banner-1.jpg"
            alt="avatar"
            className="admin-header-avatar mx-3"
          />
          <div>
            <div className="fw-bold">Krzysztof H</div>
            <div className="admin-header-email">mediaexpert@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminPanelHeader;
