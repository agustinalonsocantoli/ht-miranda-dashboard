// React
import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// Custom Hook
import { useAuthContex } from "../../App";
//  Function
import { getTitle } from '../../export/functions';
// Icons
import { SlLogout } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
// Styled
import { NavBox, H1, Icon, IconMenu } from './NavBarStyled'

export const NavBar = ({ viewBar ,setViewBar, setTitle, title }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { dispatch } = useAuthContex();
    
    useEffect(() => {
        setTitle(getTitle(location.pathname));

    }, [location.pathname, setTitle])

    const handleClick = () => {
        dispatch({
            type: 'LOG_OUT',
            payload: false,
        })
        localStorage.removeItem('login');
        localStorage.removeItem('token');
        navigate('/login');
    }
    
    return(
        <NavBox>
            <div>
                <IconMenu>
                    {viewBar ? 
                    <AiOutlineMenuFold onClick={() => {setViewBar((prev: boolean) => !prev)}}/>
                    :
                    <AiOutlineMenuUnfold onClick={() => {setViewBar((prev: boolean) => !prev)}}/>
                    }
                </IconMenu>
                <H1>{title}</H1>
            </div>
            
            <div>
                <Icon as={Link} to={'/contact'}><span>5</span><MdOutlineMail /></Icon>
                <Icon as={Link} to={'/bookings'}><span>8</span><IoNotificationsOutline /></Icon>
                <Icon><SlLogout data-cy="logout" onClick={handleClick} /></Icon>
            </div>
        </NavBox>
    );
}
