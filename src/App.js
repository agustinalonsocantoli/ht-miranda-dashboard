import { useState } from 'react';
import { Bookings } from './pages/Bookings/Bookings';
import { Rooms } from './pages/Rooms/Rooms';
import { Users } from './pages/Users/Users';
import { Contact } from './pages/Contact/Contact';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Login } from './components/Login/Login';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { getTitle } from './export/functions'
import { BookDetails } from './pages/Bookings/BookDetails';
import { EditUser } from './pages/Users/EditUser';

const App = () => {

  const [ authenticated, setAuthenticated ] = useState(false);
  const [ path, setPath ] = useState('');

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login setAuthenticated={setAuthenticated} />} />

        <Route element={ <RequireAuth authenticated={authenticated} setAuthenticated={setAuthenticated} title={getTitle(path)}/>} >
          <Route path='/' element={<Dashboard setTitle={setPath} />} />
          <Route path='/bookings' element={<Bookings setTitle={setPath} />} />
          <Route path='/bookings/:id' element={<BookDetails />} />
          <Route path='/rooms' element={<Rooms setTitle={setPath} />} />
          <Route path='/users' element={<Users setTitle={setPath} />} />
          <Route path='/users/:id' element={<EditUser />} />
          <Route path='/contact' element={<Contact setTitle={setPath} />} />
          <Route path='*' element={ <Navigate to={'/'} />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
