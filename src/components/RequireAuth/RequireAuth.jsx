import { Navigate, Outlet } from "react-router-dom";
import { LateralMenu } from "../LateralMenu/LateralMenu";
import { TopMenu } from "../TopMenu/TopMenu";

export const RequireAuth = ({ authenticated, setAuthenticated }) => {
    
    if(!authenticated && !JSON.parse(localStorage.getItem('login'))) {
        return <Navigate to={'/login'}/>
    }

    return(
        <div>
            <TopMenu setAuthenticated={setAuthenticated}/>
            <LateralMenu />
            <Outlet />
        </div>
    );
}