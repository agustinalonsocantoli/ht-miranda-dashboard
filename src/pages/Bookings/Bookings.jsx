import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BookDetails } from "./BookDetails";
import { Table } from '../../components/Table/Table'
import { dataBookings } from '../../data/DataBookings'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

export const Bookings = ({ setTitle }) => {
    const [ detail, setDetail ] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const deleteUser = (id) => {
        console.log(`Delete book ${id}`);
    }

    const editUser = (id) => {
        console.log(`Edit book ${id}`);
    }

    const cols = [
        { property: ['src' ,'id', 'name'], label: 'User', display: (src, id, name) => (
            <div>
                <img src={src} alt={`img/${id}`} />

                <div>
                    <p>{id}</p>
                    <p>{name}</p>
                </div>
            </div>) 
        },
        { property: 'date', label: 'Order Date' },
        { property: 'in', label: 'Check In' },
        { property: 'out', label: 'Check Out' },
        { property: 'note', label: 'Special Request' },
        { property: 'type', laber: 'Room Type'},
        { property: 'status', label: 'Status' },
    ];

    const actions = [
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: deleteUser },
        { icon: <TiEdit />, name: 'Edit', action: editUser },
    ];
    
    return(
        <div>
            <div style={{display: 'flex', gap: '20px'}}>
                <h1>Bookings</h1>
                <button onClick={() => setDetail(prev => !prev)}>COMPONENT DETAILS</button>
            </div>

            {detail && <BookDetails />}

            <Table data={dataBookings} cols={cols} actions={actions}/>
        </div>
    );
}