import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


//Police
import PoliceLogin from './components/police/PoliceLogin'
import OffenseRecords from './components/police/OffenseRecords'
import PoliceProfile from './components/police/PoliceProfile'
import RegisterOffence from './components/police/RegisterOffence'
import ListOffenses from './components/police/ListOffenses'
import Towing from "./components/police/Towing";
import Dashboard from "./components/police/Dashboard";




//Admin
import Admin from "./components/admin/Admin";



//User
import Login from './components/public_user/Login';
import Mainpage from './components/public_user/Mainpage';
import Role from './components/public_user/roles';
import Signin from './components/public_user/signin';
import PubHome from './components/public_user/PublicHome';
import CompPo from './components/public_user/comp';
import Mal from './components/public_user/Mal';
import History from './components/public_user/offenselist';
import Historye from './components/public_user/towed';


function App() {

  return (
    <BrowserRouter>
      <Routes>


        <Route exact path="/police/login" element={<PoliceLogin />}></Route>
        <Route exact path="/police/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/police/profile" element={<PoliceProfile />}></Route>
        <Route exact path="/police/offenses/history" element={<OffenseRecords />}></Route>
        <Route exact path="/police/offenses/new" element={<RegisterOffence />}></Route>
        <Route exact path="/police/offenses/list" element={<ListOffenses />}></Route>
        <Route exact path="/police/towing/new" element={<Towing />}></Route>

        <Route exact path="/admin" element={<Admin />}></Route>


        <Route path='/' element={<Mainpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/roles' element={<Role />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/puHo' element={<PubHome />} />
        <Route path='/CompPo' element={<CompPo />} />
        <Route path='/mal' element={<Mal />} />
        <Route path='/Historye' element={<Historye />} />
        <Route path='/History' element={<History />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
