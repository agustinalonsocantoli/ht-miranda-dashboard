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
import styled from 'styled-components';

export const AppBox = styled.div`
  display:flex;
`;
export const ContentBox = styled.div`
  width: 100%;
`;




const App = () => {

  const [ authenticated, setAuthenticated ] = useState(false);
  const [ viewBar, setViewBar ] = useState(true);

  return (
    <Router>
      <AppBox>

        {viewBar && <SideBar />}

        
        <ContentBox>
          <NavBar viewBar={viewBar} setViewBar={setViewBar}/>
          
          <Routes>
            <Route path='/login' element={<Login setAuthenticated={setAuthenticated} />} />
            
            <Route element={ <RequireAuth authenticated={authenticated} setAuthenticated={setAuthenticated}/>} >
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
