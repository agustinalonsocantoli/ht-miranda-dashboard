import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../features/bookingsSlice";
import { BookingsContent, NameBox, Date, Check, Notes, TextRoom, Booked, Refund, Progress, Options, Filters } from "./BookingsStyled";
import { formatDate } from "../../export/functions";


export const Bookings = () => {

    const { bookings } = useSelector(state => state.bookingsReducer)
    const dispatch = useDispatch();

    const [ bookingsList , setBookingsList ] = useState([]);
    const [ order, setOrder ] = useState('date');
    const [ status, setStatus] = useState('');

    useEffect(() => {
        if(bookings.length === 0){
            dispatch(getBookings());
        }

    }, [dispatch, bookings]);

    useEffect(() => {
        const bookingsOrderBy = [...bookings];

        bookingsOrderBy.sort((a, b) => {
            if(a[order] > b[order]) {
                return 1
            } else if (a[order] < b[order]) {
                return -1
            }
            return 0
        });

        if(status !== ''){
            const bookingsFilter = bookingsOrderBy.filter(book => book.status === status)
            setBookingsList(bookingsFilter)
        } else {
            setBookingsList(bookingsOrderBy)
        }
        
    }, [order, bookings, status])


    const cols = [
        { property: ['src' ,'id', 'name'], label: 'Guest', display: (row) => (
            <NameBox as={Link} to={`/bookings/${row.id}`}>
                <img src={row.src} alt={`img/${row.id}`} />

                <div>
                    <p>{row.id}</p>
                    <p>{row.name}</p>
                </div>
            </NameBox>) 
        },
        { property: 'date', label: 'Order Date', display: (row) => (<Date>{formatDate(row.date)}</Date>) },
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
    
    return(
        <BookingsContent>
            <Options>
                <Filters>
                    <p onClick={() => setStatus('')}>All Bookings</p>
                    <p onClick={() => setStatus('Booked')}>Checking In</p>
                    <p onClick={() => setStatus('Refund')}>Checking Out</p>
                    <p onClick={() => setStatus('Progress')}>In Progress</p>
                </Filters>

                <select value={order} onChange={({ target }) => setOrder(target.value)}>
                    <option value="date">Order Date</option>
                    <option value="name">Guest</option>
                    <option value="checkinDate">Check in</option>
                    <option value="checkoutDate">Check out</option>
                </select>
            </Options>

            <Table data={bookingsList} cols={cols} />
        </BookingsContent>
    );
}