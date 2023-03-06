// React
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Redux
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { getBookings } from "../../features/bookingsSlice";
// Components
import { Table } from '../../components/Table/Table'
// Functions
import { formatDate } from "../../export/functions";
// Icons
import { RxCrossCircled } from "react-icons/rx";
// Styled
import { 
    BookingsContent, NameBox, Date, Check, Notes, TextRoom, 
    Booked, Refund, Progress, Options, Filters, Close, PopupBox 
} from "./BookingsStyled";


export const Bookings = () => {

    const { bookings } = useAppSelector(state => state.bookingsReducer)
    const dispatch = useAppDispatch();

    const [ bookingsList , setBookingsList ] = useState([]);
    const [ order, setOrder ] = useState('date');
    const [ status, setStatus] = useState('');
    const [ popupData, setPopupData ] = useState<any>(null);
    const [ popup, setPopup ] = useState(false);

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

    const handleClick = (booking: any) => {
        setPopupData(booking);
        setPopup(true);
    }

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
        { property: 'date', label: 'Order Date', display: (row: any) => (<Date>{formatDate(row.date)}</Date>) },
        { property: ['checkinDate', 'checkinTime'], label: 'Check In', display: (row: any) => (
            <Check>
                <p>{row.checkinDate}</p>
                <p>{row.checkinTime}</p>
            </Check>) 
        },
        { property: ['checkoutDate', 'checkoutTime'], label: 'Check Out', display: (row: any) => (
            <Check>
                <p>{row.checkoutDate}</p>
                <p>{row.checkoutTime}</p>
            </Check>) 
        },
        { property: 'note', label: 'Special Request', display: (row: any) => (<Notes onClick={() => handleClick({...row})}>View Notes</Notes>) },
        { property: 'type', label: 'Room Type', display: (row: any) => (<TextRoom>{row.type}</TextRoom>) },
        { property: 'status', label: 'Status', display: (row: any) => (
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

            <Table data={bookingsList} cols={cols} actions={null}/>

            {popup && <PopupBox>
                <h3><span>" {popupData.name} "</span> sent the following note:</h3>
                <p>{popupData.note}</p>
                <p>Date: {popupData ? formatDate(popupData.date) : popupData.date}</p>

                <Close onClick={() => setPopup(false)}>
                    <RxCrossCircled /> 
                </Close>
            </PopupBox>}

        </BookingsContent>
    );
}