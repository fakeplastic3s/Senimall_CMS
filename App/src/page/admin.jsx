import Content from "../component/content";
import Sidebar from "../component/sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Admin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Ubah sesuai dengan cara penyimpanan token Anda
  useEffect(() => {
    if (token === "owner") {
      navigate("/owner");
    } else if (token === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [token]);
  const name = useLocation();
  const adminName = name.state;
  console.log(adminName);
  return (
    <div className="w-full min-h-screen flex ">
      <Sidebar name={adminName} />
      <Content />
      {/* <Outlet/> */}
    </div>
  );
}
