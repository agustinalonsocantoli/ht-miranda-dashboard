// React
import React, { useState, useContext, useReducer } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
// Components
import { NavBar } from './components/NavBar/NavBar';
import { SideBar } from './components/SideBar/SideBar';
import { Bookings } from './pages/Bookings/Bookings';
import { Rooms } from './pages/Rooms/Rooms';
import { Users } from './pages/Users/Users';
import { Contact } from './pages/Contact/Contact';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Login } from './components/Login/Login';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { BookDetails } from './pages/Bookings/BookDetails';
import { EditUser } from './pages/Users/EditUser';
import { NewUser } from './pages/Users/NewUser'
import { NewRoom } from "./pages/Rooms/NewRoom";
import { EditRoom } from "./pages/Rooms/EditRoom";
// Styled
import { AppBox, ContentBox } from './AppStyled';

// interface State {
//   auth: boolean;
//   username: string;
//   password: string;
// }

const AuthContext = React.createContext();

const initialState = {
    auth: localStorage.getItem('login') ? true : false,
    username: 'agustin@hm.com',
    password: '000000',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOG_IN': return {
            ...state,
            auth: action.payload,
        }
        case 'LOG_OUT': return {
            ...state,
            auth: action.payload,
        }
        default:
            return state
    }
}

export const useAuthContex = () => {
  return useContext(AuthContext);
}

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const [ viewBar, setViewBar ] = useState(true);
  const [ title, setTitle ] = useState(true);

  return (
    <Router basename='/ht-miranda-dashboard'>
      <AuthContext.Provider value={{ auth: state.auth, username: state.username, password: state.password, dispatch }}>
        <AppBox>
          {state.auth && <SideBar title={title} viewBar={viewBar}/>}

          <ContentBox>
            {state.auth && <NavBar viewBar={viewBar} setViewBar={setViewBar}  setTitle={setTitle} title={title}/>}
            
            <Routes>
              <Route path='/login' element={<Login />} />
              
              <Route element={ <RequireAuth />} >
                <Route path='/' element={<Dashboard />} />
                <Route path='/bookings' element={<Bookings />} />
                <Route path='/bookings/:id' element={<BookDetails />} />
                <Route path='/rooms' element={<Rooms />} />
                <Route path='/rooms/new-room' element={<NewRoom />} />
                <Route path='/rooms/:id' element={<EditRoom />} />
                <Route path='/users' element={<Users />} />
                <Route path='/users/new-user' element={<NewUser />} />
                <Route path='/users/:id' element={<EditUser />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='contact/:id' element={<Contact />} />
                <Route path='*' element={ <Navigate to={'/'} />} />
              </Route>
              
            </Routes>
          </ContentBox>
        </AppBox>
        </AuthContext.Provider>
    </Router>
  );
}

export default App;