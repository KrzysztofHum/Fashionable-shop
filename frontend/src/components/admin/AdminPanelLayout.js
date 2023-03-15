import { Outlet } from "react-router-dom";
import AdminPanelHeader from "./AdminPanelHeader";
import AdminPanelNav from "./AdminPanelNav";

const AdminPanelLayout = () => {
  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex admin-layout">
        <aside className="col-2">
          <AdminPanelNav />
        </aside>
        <main className="col-10">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminPanelLayout;
