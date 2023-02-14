import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Bookings = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    return(
        <div>
            <h1>Bookings</h1>
        </div>
    );
}