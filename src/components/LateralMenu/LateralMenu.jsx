import { NavLink } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiKey } from "react-icons/bi";
import { BsCalendar2Check } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Key, List, BoxLogo, Logo, H, M, P, LateralNav } from "./LMenuStyled";

export const LateralMenu = () => {

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
                <NavLink to={'/'}><TbLayoutDashboard />Dashboard</NavLink>
                <NavLink to={'/bookings'}><BsCalendar2Check/>Booking</NavLink>
                <NavLink to={'/rooms'}><Key><BiKey /></Key>Rooms</NavLink>
                <NavLink to={'/users'}><FiUser/>Users</NavLink>
            </List>
        </LateralNav>
    );
}