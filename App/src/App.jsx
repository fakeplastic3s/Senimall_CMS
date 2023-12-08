import "./App.css";
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
          <Route path='/admin' Component={Admin}/>
          <Route path='/owner' Component={Owner}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
