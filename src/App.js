import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Complaints from "./components/Complaints";
import Offenses from "./components/Offenses";
import Profile from "./components/Profile";

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/offenses" element={<Offenses />}></Route>
          <Route exact path="/complaints" element={<Complaints />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
