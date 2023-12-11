import "./App.css";
import Artwork from "./component/artwork";
import Content from "./component/content";
import Submission from "./component/submission";
import Admin from "./page/admin";
import Login from "./page/login";
import Owner from "./page/owner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/admin' Component={Admin}>
            <Route path="dashboard" Component={Content}/>
            <Route path="artwork" Component={Artwork}/>
            <Route path="submission" Component={Submission}/>
          </Route>
          <Route path='/owner' Component={Owner}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
