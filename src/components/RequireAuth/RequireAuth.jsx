import { Navigate, Outlet } from "react-router-dom";
import { useAuthContex } from "../../App";

export const RequireAuth = () => {
    const { auth } = useAuthContex();

    return(
        !auth && !localStorage.getItem('login') ?
        <Navigate to={'/login'}/> : <Outlet />
    );  
}