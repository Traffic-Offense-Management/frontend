import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Mainpage from './components/Mainpage';
import Role from './components/roles';
import Signin from './components/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/roles' element={<Role />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
