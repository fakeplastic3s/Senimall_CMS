import SidebarOwner from "../component/sidebar_owner";
import { Outlet, useLocation } from "react-router-dom";

export default function Owner() {
    const name = useLocation();
  const ownerName = name.state
    return (
        <>
            <div className="w-full min-h-screen flex ">
                <SidebarOwner name={ownerName}/>
                <Outlet/>
            </div>
        </>
    )
} 