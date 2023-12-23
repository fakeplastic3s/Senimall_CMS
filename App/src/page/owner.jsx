import SidebarOwner from "../component/sidebar_owner";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/footer";

export default function Owner() {
  const name = useLocation();
  const ownerName = name.state;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === "owner") {
      navigate("/owner", { state: name.state });
    } else if (token === "admin") {
      navigate("/admin", { state: name.state });
    } else {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <div className="w-full min-h-screen flex ">
        <SidebarOwner name={ownerName} />

        <div className="min-h-screen w-[82%]  ms-auto px-5 md:px-10 py-16">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
