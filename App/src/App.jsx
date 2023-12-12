import "./App.css";
import Admin from "./page/admin";
import Login from "./page/login";
import Owner from "./page/owner";
import DashboardAdmin from "./component/admin/dahboard";
import Artwork from "./component/admin/artwork";
import Submission from "./component/admin/dahboard";
import DashboardOwner from "./component/owner/dashboard";
import UsersOwner from "./component/owner/users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/admin" Component={Admin}>
            <Route path="dashboard" Component={DashboardAdmin} />
            <Route path="artwork" Component={Artwork} />
            <Route path="submission" Component={Submission} />
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
