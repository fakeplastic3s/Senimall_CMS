import Artwork from "../component/artwork";
import Sidebar from "../component/sidebar";
import Content from "../component/content";
import SidebarOwner from "../component/sidebar_owner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Admin() {
  return (
    <div className="w-full min-h-screen flex ">
      <Sidebar />
      <Router>
        <Routes>
          <Route path='/Content' Component={Content} />
          <Route path='/Artwork' Component={Artwork} />
        </Routes>
      </Router>
    </div>
  );
}
