import { useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavBox, H1, Icon, IconMenu } from './TMenuStyled'

export const TopMenu = ({ setAuthenticated, title, setVisibilityNav, visibilityNav }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        setAuthenticated(false);
        localStorage.removeItem('login')
        navigate('/login');
    }
    
    return(
        <NavBox>
            <div>
                <IconMenu>
                    {visibilityNav ? 
                    <AiOutlineMenuFold onClick={() => {setVisibilityNav(prev => !prev)}}/>
                    :
                    <AiOutlineMenuUnfold onClick={() => {setVisibilityNav(prev => !prev)}}/>
                    }
                </IconMenu>
                <H1>{title}</H1>
            </div>
            
            <div>
                <Icon as={Link} to={'/contact'}><span>5</span><MdOutlineMail /></Icon>
                <Icon><span>8</span><IoNotificationsOutline /></Icon>
                <Icon><SlLogout onClick={handleClick} /></Icon>
            </div>
        </NavBox>
    );
}