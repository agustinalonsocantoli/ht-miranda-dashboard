import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Board } from '../../components/Board/Board'
import { dataRooms } from './DataRooms'

export const Rooms = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const dataHead = ['Room Name', 'Bed Type', 'Room Floor', 'Facilities', 'Rate', 'Status'];
    
    return(
        <div>
            <h1>Rooms</h1>
            <Board dataBody={dataRooms} dataHead={dataHead}/>
        </div>
    );
}