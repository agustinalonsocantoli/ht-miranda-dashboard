import { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { SideBar } from './components/SideBar/SideBar';
import { Bookings } from './pages/Bookings/Bookings';
import { Rooms } from './pages/Rooms/Rooms';
import { Users } from './pages/Users/Users';
import { Contact } from './pages/Contact/Contact';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Login } from './components/Login/Login';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { BookDetails } from './pages/Bookings/BookDetails';
import { EditUser } from './pages/Users/EditUser';
import { AppBox, ContentBox } from './AppStyled';

const App = () => {
  const [ auth, setAuth ] = useState(localStorage.getItem('login') ? true : false);
  const [ viewBar, setViewBar ] = useState(true);
  const [ title, setTitle ] = useState(true);

  return (
    <Router>
      <AppBox>
        {auth && <SideBar title={title} viewBar={viewBar}/>}

        <ContentBox>
          {auth && <NavBar viewBar={viewBar} setViewBar={setViewBar} setAuthenticated={setAuth} setTitle={setTitle} title={title}/>}
          
          <Routes>
            <Route path='/login' element={<Login setAuthenticated={setAuth} />} />
            
            <Route element={ <RequireAuth authenticated={auth} setAuthenticated={setAuth}/>} >
              <Route path='/' element={<Dashboard />} />
              <Route path='/bookings' element={<Bookings />} />
              <Route path='/bookings/:id' element={<BookDetails />} />
              <Route path='/rooms' element={<Rooms />} />
              <Route path='/users' element={<Users />} />
              <Route path='/users/:id' element={<EditUser />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={ <Navigate to={'/'} />} />
            </Route>
            
          </Routes>
        </ContentBox>
      </AppBox>
    </Router>
  );
}

export default App;