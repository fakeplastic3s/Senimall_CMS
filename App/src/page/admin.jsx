import Sidebar from "../component/sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Admin() {

  const name = useLocation();
  const adminName = name.state
  console.log(adminName)
  return (
        <div className="w-full min-h-screen flex ">
          <Sidebar name={adminName}/>
          <Outlet/>
        </div>
  );
}
