// React
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Redux
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { deleteRoom, getRooms } from '../../features/roomsSlice';
// Components
import { Table } from '../../components/Table/Table'
// Icons
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
// Function
import { getDiscount } from '../../export/functions';
// Styled
import { RoomsContent, NameBox, Text, TextFac, TextRate, Available, Booked, TextOffer, Options, Filters } from './RoomsStyled';


export const Rooms = () => {
    const { rooms } = useAppSelector(state => state.roomsReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [ roomsList , setRoomsList ] = useState([]);
    const [ order, setOrder ] = useState<string>('price');
    const [ status, setStatus] = useState<string>('');

    

    useEffect(() => {
        if(rooms.length === 0){
            dispatch(getRooms());
        }
    }, [dispatch, rooms])

    useEffect(() => {
        const roomsFilter = rooms.filter(room => room['status'] !== status)

        roomsFilter.sort((a, b) => {
            if(a[order] > b[order]) {
                return 1
            } else if (a[order] < b[order]) {
                return -1
            }
            return 0
        });


        setRoomsList(roomsFilter)
        
    }, [order, rooms, status])

    const removeRoom = (id: string) => {
        dispatch(deleteRoom(id));
    }

    const cols = [
        { property: ['src' ,'name', 'id'], label: 'Room', display: (row: any) => (
            <NameBox as={Link} to={`/rooms/${row.id}`}>
                <img src={row.src} alt={`img/${row.id}`} />
                
                <div>
                    <Text>{row.name}</Text>
                    <p>{row.id}</p>
                </div>
            </NameBox>) 
        },
        { property: 'type', label: 'Type', display: (row: any) => (<Text>{row.type}</Text>) },
        { property: 'amenities', label: 'Amenities', display: (row: any) => (
            row.amenities.map((amenitie, index) => 
                <TextFac key={index}>
                    {(index && index !== row.amenities.length - 1 ? ", " : "") +
                    (index && index === row.amenities.length - 1 ? " & " : "") +
                    amenitie + (index === row.amenities.length - 1 ? "." : "")}
                </TextFac>
            )) 
        },
        { property: 'price', label: 'Price', display: (row: any) => (<TextRate>${row.price}<span>/night</span></TextRate>) },
        { property: 'offer', label: 'Offer Price', display: (row: any) => (
            <TextOffer>
                {getDiscount(row.price, row.offer)}<span>/night</span>
            </TextOffer>) 
        },
        { property: 'status', label: 'Status', display: (row: any) => (
            row.status === 'Available' ? <Available>{row.status}</Available> : <Booked>{row.status}</Booked>) 
        },
    ];

    const actions = [
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: removeRoom },
        { icon: <TiEdit />, name: 'Edit', action: (id: string) => navigate(`/rooms/${id}`) },
    ];
    
    return(
        <RoomsContent>
            <Options>
                <Filters>
                    <p onClick={() => setStatus('')}>All Rooms</p>
                    <p onClick={() => setStatus('Booked')}>Available</p>
                    <p onClick={() => setStatus('Available')}>Booked</p>
                </Filters>

                <div>
                    <button onClick={() => navigate('/rooms/new-room')}>+ New Room</button>

                    <select value={order} onChange={({ target }) => setOrder(target.value)}>
                        <option value="price">Price</option>
                    </select>
                </div>
            </Options>
        
            <Table data={roomsList} cols={cols} actions={actions}/>
        </RoomsContent>
    );
}