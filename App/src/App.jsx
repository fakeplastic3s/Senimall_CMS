import "./App.css";
import Admin from "./page/admin";
import Login from "./page/login";
import Owner from "./page/owner";
import DashboardOwner from "./component/owner/dashboard";
import UsersOwner from "./component/owner/users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/admin" Component={Admin} />
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
