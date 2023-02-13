import { NavLink } from "react-router-dom";

export const LateralMenu = () => {
    return(
        <div>
            <ul>
                <li><NavLink to={'/'}>Dashboard</NavLink></li>
                <li><NavLink to={'/bookings'}>Booking</NavLink></li>
                <li><NavLink to={'/rooms'}>Rooms</NavLink></li>
                <li><NavLink to={'/users'}>Users</NavLink></li>
            </ul>
        </div>
    );
}