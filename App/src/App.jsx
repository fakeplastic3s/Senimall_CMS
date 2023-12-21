import "./App.css";
import Admin from "./page/admin";
import Login from "./page/login";
import Owner from "./page/owner";
import DashboardAdmin from "./component/admin/dahboard";
import Artwork from "./component/admin/artwork";
import Submission from "./component/admin/submission_list";
import Add_Submission from "./component/admin/add_submission";
import DashboardOwner from "./component/owner/dashboard";
import UsersOwner from "./component/owner/users";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ArtworkList from "./component/admin/artwork_list";
import AddArtwork from "./component/admin/add_artworks";
import DetailArtwork from "./component/admin/detail_artwork";
import Edit_Artwork from "./component/admin/edit_artwork";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/admin" Component={Admin}>
            <Route path="dashboard" Component={DashboardAdmin} />
            <Route path="artwork" Component={Artwork}>
              <Route path="artwork-list" Component={ArtworkList} />
              <Route path="artwork-add" Component={AddArtwork} />
              <Route path="artwork-detail/:id" Component={DetailArtwork} />
              <Route path="edit-artworklist/:id" Component={Edit_Artwork} />
            </Route>
            <Route path="submission" Component={Submission} />
            <Route path="submission-add" Component={Add_Submission} />
          </Route>
          <Route path="/owner" Component={Owner}>
            <Route path="/owner" Component={DashboardOwner} />
            <Route path="/owner/Dashboard" Component={DashboardOwner} />
            <Route path="/owner/Users" Component={UsersOwner} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
