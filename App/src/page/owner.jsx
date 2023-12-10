import SidebarOwner from "../component/sidebar_owner";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Owner() {
  const name = useLocation();
  const ownerName = name.state;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === "owner") {
      navigate("/owner");
    } else if (token === "admin") {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  }, [token]);
  return (
    <>
      <div className="w-full min-h-screen flex ">
        <SidebarOwner name={ownerName} />
        <Outlet />
      </div>
    </>
  );
}
