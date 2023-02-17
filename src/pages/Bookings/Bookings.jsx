import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataBookings } from '../../data/DataBookings'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { NameBox, Date, Check, Notes, TextRoom, Booked, Refund, Progress } from "./BookingsStyled";

export const Bookings = ({ setTitle }) => {
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
            <NameBox as={Link} to={`/bookings/${id}`}>
                <img src={src} alt={`img/${id}`} />

                <div>
                    <p>{id}</p>
                    <p>{name}</p>
                </div>
            </NameBox>) 
        },
        { property: ['date'], label: 'Order Date', display: (date) => (<Date>{date}</Date>) },
        { property: ['checkinDate', 'checkinTime'], label: 'Check In', display: (checkinDate, checkinTime) => (
            <Check>
                <p>{checkinDate}</p>
                <p>{checkinTime}</p>
            </Check>) 
        },
        { property: ['checkoutDate', 'checkoutTime'], label: 'Check Out', display: (checkoutDate, checkoutTime) => (
            <Check>
                <p>{checkoutDate}</p>
                <p>{checkoutTime}</p>
            </Check>) 
        },
        { property: ['note'], label: 'Special Request', display: (note) => (<Notes>{note}</Notes>) },
        { property: ['type'], label: 'Room Type', display: (type) => (<TextRoom>{type}</TextRoom>) },
        { property: ['status'], label: 'Status', display: (status) => (
            status === 'Booked' ? <Booked>{status}</Booked> : 
            status === 'Refund' ? <Refund>{status}</Refund> :
            <Progress>{status}</Progress>)
        },
    ];

    const actions = [
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: deleteUser },
        { icon: <TiEdit />, name: 'Edit', action: editUser },
    ];
    
    return(
        <div>
            <Table data={dataBookings} cols={cols} actions={actions}/>
        </div>
    );
}