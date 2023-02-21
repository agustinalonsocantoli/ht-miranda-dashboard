// React
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContex } from '../../App'
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../features/usersSlice";
// Icons
import { TbLayoutDashboard } from "react-icons/tb";
import { BiKey } from "react-icons/bi";
import { BsCalendar2Check } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
// Styled
import Skeleton from '@mui/material/Skeleton';
import { Key, List, BoxLogo, Logo, H, M, P, LateralNav, UserBox, Img, ImgBox, H4, H5, Button, H3, CopyRights, Foot, Active } from "./SideBarStyled";



export const SideBar = ({ title, viewBar }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { users } = useSelector(state => state.usersReducer);

    const { username } = useAuthContex();

    const [ userLog, setUserLog ] = useState({})
    const [ log, setLog ] = useState(false)
    


    useEffect(() => {
        if(users.length === 0){
            dispatch(getUsers());
        }

        setUserLog(users.find(user => user.email === username))

        const timeout = setTimeout(() => {
            setLog(true)
        }, 2000)

        return () => {
            clearTimeout(timeout);
        }
    }, [dispatch, users, username])


    return(
        <LateralNav visible={viewBar}>
            <BoxLogo>
                <Logo>
                    <h1>H</h1>
                </Logo>

                <div>
                    <H>Hotel</H>
                    <M>Miranda</M>
                    <P>Hotel Admin Dashboard</P>
                </div>
            </BoxLogo>

            <List>
                <Active active={title === 'Dashboard' && title}>
                    <div></div>
                    <NavLink to={'/'}>
                        <TbLayoutDashboard />
                        Dashboard
                    </NavLink>
                </Active>

                <Active active={title === 'Bookings' && title}>
                    <div></div>
                    <NavLink to={'/bookings'}>
                        <BsCalendar2Check/>
                        Bookings
                        </NavLink>
                </Active>
                
                <Active active={title === 'Rooms' && title}>
                    <div ></div>
                    <NavLink to={'/rooms'}>
                        <Key><BiKey /></Key>
                        Rooms
                        </NavLink>
                </Active>
                
                <Active active={title === 'Users' && title}>
                    <div></div>
                    <NavLink to={'/users'}>
                        <FiUser/>
                        Users
                        </NavLink>
                </Active>

                <Active active={title === 'Contact' && title}>
                    <div></div>
                    <NavLink to={'/contact'}>
                        <TiContacts/>
                        Contact
                        </NavLink>
                </Active>
                
            </List>

            <UserBox>
                <ImgBox>
                    {!log ? <Skeleton variant="rectangular" sx={{width: 70, height: 70, borderRadius: '8px'}}/> :
                    <Img 
                    src={userLog.src} 
                    alt={`user/${userLog.id}`} />}
                </ImgBox>

                {!log ? <Skeleton sx={{height: 24}}/> : <H4>{userLog.name}</H4>}
                {!log ? <Skeleton sx={{marginTop: '10px', height: 17}} /> :<H5>{userLog.email}</H5>}
                <Button onClick={() => {log && navigate(`/users/${userLog.id}`)}}>Edit</Button>
            </UserBox>

            <div>
                <H3>Hotel Miranda Admin Dashboard</H3>
                <CopyRights>&copy;2023 All Rights Reserved</CopyRights>

                <Foot>Made with ♥ by ACC</Foot>
            </div>
        </LateralNav>
    );
}