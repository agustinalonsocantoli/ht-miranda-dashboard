import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BookDetails } from "./BookDetails";

export const Bookings = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const [ detail, setDetail ] = useState(false);

    console.log(detail);

    return(
        <div>
            <div style={{display: 'flex', gap: '20px'}}>
                <h1>Bookings</h1>
                <button onClick={() => setDetail(prev => !prev)}>COMPONENT DETAILS</button>
            </div>

            {detail && <BookDetails />}
        </div>
    );
}