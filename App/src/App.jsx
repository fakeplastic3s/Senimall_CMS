import "./App.css";
import Admin from "./page/admin";
import Login from "./page/login";
import Owner from "./page/owner";
import DashboardAdmin from "./component/admin/dahboard";
import Artwork from "./component/admin/artwork";
import Submission from "./component/admin/submission_list";
import Add_Submission from "./component/admin/add_submission";
import DashboardOwner from "./component/owner/dashboard";
import Users from "./component/owner/users";
import UserList from "./component/owner/users_list";
import AddUser from "./component/owner/add_user";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ArtworkList from "./component/admin/artwork_list";
import AddArtwork from "./component/admin/add_artworks";

import Edit_Artwork from "./component/admin/edit_artwork";
import Artist from "./page/artist";
import Edit_user from "./component/owner/edit_user";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path="/admin" Component={Admin}>
            <Route path="dashboard" Component={DashboardAdmin} />
            <Route path="artwork" Component={Artwork}>
              <Route path="artwork-list" Component={ArtworkList} />
              <Route path="artwork-add" Component={AddArtwork} />
              <Route path="edit-artworklist/:id" Component={Edit_Artwork} />
            </Route>
            <Route path="submission" Component={Submission} />
          </Route>
          <Route path="/owner" Component={Owner}>
            <Route path="/owner" Component={DashboardOwner} />
            <Route path="/owner/Dashboard" Component={DashboardOwner} />
            <Route path="users" Component={Users}>
              <Route path="" Component={UserList} />
              <Route path="add-user" Component={AddUser} />
              <Route path="edit-user/:id" Component={Edit_user} />
            </Route>
          </Route>
          <Route path="/artist" Component={Artist} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
