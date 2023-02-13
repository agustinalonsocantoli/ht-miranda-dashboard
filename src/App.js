import { useState } from 'react';
import { Bookings } from './pages/Bookings/Bookings';
import { Rooms } from './pages/Rooms/Rooms';
import { Users } from './pages/Users/Users';
import { Contact } from './pages/Contact/Contact';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Login } from './components/Login/Login';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [ authenticated, setAuthenticated ] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login setAuthenticated={setAuthenticated} />} />

        <Route element={ <RequireAuth authenticated={authenticated} setAuthenticated={setAuthenticated}/>} >
          <Route path='/' element={<Dashboard />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/users' element={<Users />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
