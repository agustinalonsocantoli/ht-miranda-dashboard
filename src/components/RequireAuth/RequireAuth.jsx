import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = ({ auth }) => {
    
    return(
        !auth && !localStorage.getItem('login') ?
        <Navigate to={'/login'}/> : <Outlet />
    );  
}