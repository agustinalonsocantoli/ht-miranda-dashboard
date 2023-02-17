import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = ({ authenticated }) => {
    
    return(
        !authenticated && !JSON.parse(localStorage.getItem('login')) ?
        <Navigate to={'/login'}/> : <Outlet />
    );  
}