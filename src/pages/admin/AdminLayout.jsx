import { Outlet } from "react-router";
import Header from "../../components/admin/Header/Index";

const AdminLayout = () => {
  return (
    <>
      <div className="mx-36 max-[1000px]:mx-10 max-[700px]:mx-2">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
export default AdminLayout;
