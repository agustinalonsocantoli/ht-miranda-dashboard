import { Link } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataBookings } from '../../data/DataBookings'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { BookingsContent, NameBox, Date, Check, Notes, TextRoom, Booked, Refund, Progress } from "./BookingsStyled";

export const Bookings = () => {

    const deleteBook = (id) => {
        console.log(`Delete book ${id}`);
    }

    const editBook = (id) => {
        console.log(`Edit book ${id}`);
    }

    const cols = [
        { property: ['src' ,'id', 'name'], label: 'User', display: (row) => (
            <NameBox as={Link} to={`/bookings/${row.id}`}>
                <img src={row.src} alt={`img/${row.id}`} />

                <div>
                    <p>{row.id}</p>
                    <p>{row.name}</p>
                </div>
            </NameBox>) 
        },
        { property: 'date', label: 'Order Date', display: (row) => (<Date>{row.date}</Date>) },
        { property: ['checkinDate', 'checkinTime'], label: 'Check In', display: (row) => (
            <Check>
                <p>{row.checkinDate}</p>
                <p>{row.checkinTime}</p>
            </Check>) 
        },
        { property: ['checkoutDate', 'checkoutTime'], label: 'Check Out', display: (row) => (
            <Check>
                <p>{row.checkoutDate}</p>
                <p>{row.checkoutTime}</p>
            </Check>) 
        },
        { property: 'note', label: 'Special Request', display: (row) => (<Notes>{row.note}</Notes>) },
        { property: 'type', label: 'Room Type', display: (row) => (<TextRoom>{row.type}</TextRoom>) },
        { property: 'status', label: 'Status', display: (row) => (
            row.status === 'Booked' ? <Booked>{row.status}</Booked> : 
            row.status === 'Refund' ? <Refund>{row.status}</Refund> :
            <Progress>{row.status}</Progress>)
        },
    ];

    const actions = [
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: deleteBook },
        { icon: <TiEdit />, name: 'Edit', action: editBook },
    ];
    
    return(
        <BookingsContent>
            <Table data={dataBookings} cols={cols} actions={actions}/>
        </BookingsContent>
    );
}