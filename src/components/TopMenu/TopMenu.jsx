import { useNavigate } from "react-router-dom";

export const TopMenu = ({ setAuthenticated }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        setAuthenticated(false);
        localStorage.removeItem('login')
        navigate('/login');
    }

    return(
        <div>
            <h1>TopMenu</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}