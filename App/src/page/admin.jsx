import Add_Artwork from "../component/add_artworks";
import Content from "../component/content";
import ArtworkList from "../component/artwork_list";
import Sidebar from "../component/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Artwork from "../component/artwork";

export default function Admin() {

  const name = useLocation();
  const adminName = name.state
  console.log(adminName)
  return (
        <div className="w-full min-h-screen flex ">
          <Sidebar name={adminName}/>
          {/* <Content/> */}
          {/* <Outlet/> */}
          {/* <Add_Artwork/> */}
          <Artwork/>
        </div>
  );
}
