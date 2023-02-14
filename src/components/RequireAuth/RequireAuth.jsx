import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LateralMenu } from "../LateralMenu/LateralMenu";
import { TopMenu } from "../TopMenu/TopMenu";
import { BoxDashboard, BoxOutNav, TopNav, LateralNav, Components } from './RAuthStyled';

export const RequireAuth = ({ authenticated, setAuthenticated, title }) => {
    const [ visibilityNav, setVisibilityNav ] = useState(true);

    if(!authenticated && !JSON.parse(localStorage.getItem('login'))) {
        return <Navigate to={'/login'}/>
    }

    if(visibilityNav){
        return(
            <BoxDashboard>
                <TopNav>
                    <TopMenu setAuthenticated={setAuthenticated} title={title} setVisibilityNav={setVisibilityNav} visibilityNav={visibilityNav}/>
                </TopNav>

                <LateralNav>
                    <LateralMenu title={title} />
                </LateralNav>

                <Components>
                    <Outlet />
                </Components>
            </BoxDashboard>
        );
    }

    return(
        <BoxOutNav>
            <TopMenu setAuthenticated={setAuthenticated} title={title} setVisibilityNav={setVisibilityNav}/>
            <Outlet />
        </BoxOutNav>
    );  
}