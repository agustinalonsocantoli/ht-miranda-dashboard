import { useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { NavBox, H1, Icon } from './TMenuStyled'

export const TopMenu = ({ setAuthenticated, title, setVisibilityNav }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        setAuthenticated(false);
        localStorage.removeItem('login')
        navigate('/login');
    }
    
    return(
        <NavBox>
            <div>
                <Icon><HiMenuAlt2 onClick={() => {setVisibilityNav(prev => !prev)}}/></Icon>
                <H1>{title}</H1>
            </div>
            
            <div>
                <Icon><MdOutlineMail /></Icon>
                <Icon><IoNotificationsOutline /></Icon>
                <Icon><SlLogout onClick={handleClick} /></Icon>
            </div>
        </NavBox>
    );
}