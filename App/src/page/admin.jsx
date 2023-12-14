import Sidebar from "../component/sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../component/footer";

export default function Admin() {
  const name = useLocation();

  const [menu, setMenu] = useState("Dashboard");
  const [adminName, setAdminName] = useState(name.state);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Ubah sesuai dengan cara penyimpanan token Anda

  function receiveMenuData(data) {
    setMenu(data);
  }

  useEffect(() => {
    if (token === "owner") {
      navigate("/owner", { state: name.state });
    } else if (token === "admin") {
      navigate("/admin", { state: name.state });
      console.log(adminName);
    } else {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (menu === "Dashboard") {
      navigate("dashboard", { state: name.state });
    } else if (menu === "Artwork") {
      navigate("artwork", { state: name.state });
    } else {
      navigate("submission", { state: name.state });
    }
  }, [menu]);

  return (
    <div className="w-full min-h-screen flex gap-2">
      <Sidebar name={adminName} sendDataMenu={receiveMenuData} />
      <div className="min-h-screen w-[82%] ms-auto px-5 md:px-10 py-16">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
