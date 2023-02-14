import { NavLink } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiKey } from "react-icons/bi";
import { BsCalendar2Check } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import userImg from '../../assets/img/user.png'
import { Key, List, BoxLogo, Logo, H, M, P, LateralNav, UserBox, Img, ImgBox, H4, H5, Button, H3, CopyRights, Active } from "./LMenuStyled";

export const LateralMenu = ({ title }) => {
    const active = {
        Link: {color: '#E23428'},
        Bg: {background: '#E23428'}
    }
    
    const disactive = {
        Link: {color: '#799283'},
        Bg: {background: 'transparent'}
    }

    return(
        <LateralNav>
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
                <Active>
                    <div style={title === 'Dashboard' ? active.Bg : disactive.Bg}></div>
                    <NavLink to={'/'} style={title === 'Dashboard' ? active.Link : disactive.Link}>
                        <TbLayoutDashboard />
                        Dashboard
                    </NavLink>
                </Active>

                <Active>
                    <div style={title === 'Bookings' ? active.Bg : disactive.Bg}></div>
                    <NavLink to={'/bookings'} style={title === 'Bookings' ? active.Link : disactive.Link}>
                        <BsCalendar2Check/>
                        Bookings
                        </NavLink>
                </Active>
                
                <Active>
                    <div style={title === 'Rooms' ? active.Bg : disactive.Bg}></div>
                    <NavLink to={'/rooms'} style={title === 'Rooms' ? active.Link : disactive.Link}>
                        <Key><BiKey /></Key>
                        Rooms
                        </NavLink>
                </Active>
                
                <Active>
                    <div style={title === 'Users' ? active.Bg : disactive.Bg}></div>
                    <NavLink to={'/users'} style={title === 'Users' ? active.Link : disactive.Link}>
                        <FiUser/>
                        Users
                        </NavLink>
                </Active>
                
            </List>

            <UserBox>
                <ImgBox>
                    <Img 
                    src={userImg} 
                    alt="user/img" />
                </ImgBox>

                <H4>Agustin Alonso</H4>
                <H5>agustin@hm.com</H5>
                <Button>Edit</Button>
            </UserBox>

            <div>
                <H3>Hotel Miranda Admin Dashboard</H3>
                <CopyRights>&copy;2023 All Rights Reserved</CopyRights>
            </div>
        </LateralNav>
    );
}