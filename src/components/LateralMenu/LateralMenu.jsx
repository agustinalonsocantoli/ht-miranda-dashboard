import { NavLink } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiKey } from "react-icons/bi";
import { BsCalendar2Check } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import userImg from '../../assets/img/user.png'
import { Key, List, BoxLogo, Logo, H, M, P, LateralNav, UserBox, Img, ImgBox, H4, H5, Button, H3, CopyRights, Foot, Active } from "./LMenuStyled";

export const LateralMenu = ({ title }) => {

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

                <Foot>Made with ♥ by ACC</Foot>
            </div>
        </LateralNav>
    );
}