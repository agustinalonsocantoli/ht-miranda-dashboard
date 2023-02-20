import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../features/bookingsSlice";
import { BookingsContent, NameBox, Date, Check, Notes, TextRoom, Booked, Refund, Progress, Options, Filters } from "./BookingsStyled";


export const Bookings = () => {

    const { bookings } = useSelector(state => state.bookingsReducer)
    const dispatch = useDispatch();

    const [ bookingsList , setBookingsList ] = useState([]);

    useEffect(() => {
        if(bookings.length === 0){
            dispatch(getBookings());
        }

        setBookingsList(bookings)

    }, [dispatch, bookings]);


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
    
    return(
        <BookingsContent>
            <Options>
                <Filters>
                    <p>All Bookings.</p>
                    <p>Checking In</p>
                    <p>Checking Out</p>
                    <p>In Progress</p>
                </Filters>

                <select defaultValue={'date'}>
                    <option value="date">Order Date</option>
                    <option value="guest">Guest</option>
                    <option value="checkin">Check in</option>
                    <option value="checkout">Check out</option>
                </select>
            </Options>

            <Table data={bookingsList} cols={cols} />
        </BookingsContent>
    );
}