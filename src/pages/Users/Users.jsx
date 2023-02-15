import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataUsers } from '../../data/DataUsers'


export const Users = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const cols = [
        { property: ['src' ,'id', 'name'], label: 'User', display: (src, id, name) => (<div><img src={src} alt={`img/${id}`} /><div><p>{id}</p><p>{name}</p></div></div>) },
        { property: 'date', label: 'Order Date' },
        { property: 'in', label: 'Check In' },
        { property: 'out', label: 'Check Out' },
        { property: 'note', label: 'Special Request' },
        { property: 'type', laber: 'Room Type'},
        { property: 'status', label: 'Status' },
    ];

    return(
        <div>
            <Table data={dataUsers} cols={cols}/>
        </div>
    );
}