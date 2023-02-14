import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Contact = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })
    
    return(
        <div>
            <h1>Contact</h1>
        </div>
    );
}