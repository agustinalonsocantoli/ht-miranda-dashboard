import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataRooms } from '../../data/DataRooms'

export const Rooms = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const cols = [
        { property: ['src' ,'name', 'id'], label: 'Room Name', display: (src, id, name) => (<div><img src={src} alt={`img/${id}`} /><div><p>{name}</p><p>{id}</p></div></div>) },
        { property: 'bed', label: 'Bed Type' },
        { property: 'floor', label: 'Room Floor' },
        { property: 'facilities', label: 'Facilities' },
        { property: 'rate', label: 'Rate' },
        { property: 'status', label: 'Status' },
    ];
    
    return(
        <div>
            <Table data={dataRooms} cols={cols}/>
        </div>
    );
}