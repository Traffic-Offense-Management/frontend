import Login from "./components/user/Login";

import PoliceLogin from './components/police/PoliceLogin'
import History from './components/police/History'
import PoliceProfile from './components/police/PoliceProfile'
import RegisterOffence from './components/police/RegisterOffence'
import ListOffenses from './components/police/ListOffenses'

import React, { Component } from 'react';

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Complaints from "./components/user/Complaints";
import Offenses from "./components/user/Offenses";
import Profile from "./components/user/Profile";
import RegisterComplaint from "./components/user/RegisterComplaint";
import Towing from "./components/police/Towing";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/user/login" element={<Login />}></Route>
          <Route exact path="/user/profile" element={<Profile />}></Route>
          <Route exact path="/user/offenses" element={<Offenses />}></Route>
          <Route exact path="/user/complaints" element={<Complaints />}></Route>
          <Route exact path="/user/complaints/register" element={<RegisterComplaint />}></Route>

          <Route exact path="/police/login" element={<PoliceLogin />}></Route>
          <Route exact path="/police/profile/:policeId" element={<PoliceProfile />}></Route>
          <Route exact path="/police/offenses/history" element={<History />}></Route>
          <Route exact path="/police/offenses/new" element={<RegisterOffence />}></Route>
          <Route exact path="/police/offenses/list" element={<ListOffenses />}></Route>
          <Route exact path="/police/towing/new" element={<Towing />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
