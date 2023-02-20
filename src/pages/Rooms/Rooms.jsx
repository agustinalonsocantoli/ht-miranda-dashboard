import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRoom, getRooms } from '../../features/roomsSlice';
import { Table } from '../../components/Table/Table'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RoomsContent, NameBox, Text, TextFac, TextRate, Available, Booked, TextOffer } from './RoomsStyled';


export const Rooms = () => {
    const { rooms } = useSelector(state => state.roomsReducer);
    const dispatch = useDispatch();

    const [ roomsList , setRoomsList ] = useState([]);

    useEffect(() => {
        if(rooms.length === 0){
            dispatch(getRooms());
        }

        setRoomsList(rooms)
        
    }, [dispatch, rooms])

    const removeRoom = (id) => {
        dispatch(deleteRoom(id));
    }

    const editRoom = (id) => {
        console.log(`Edit room ${id}`);
    }

    const cols = [
        { property: ['src' ,'name', 'id'], label: 'Room', display: (row) => (
            <NameBox>
                <img src={row.src} alt={`img/${row.id}`} />
                
                <div className="rooms">
                    <Text>{row.name}</Text>
                    <p>{row.id}</p>
                </div>
            </NameBox>) 
        },
        { property: 'type', label: 'Type', display: (row) => (<Text>{row.type}</Text>) },
        { property: 'amenities', label: 'Amenities', display: (row) => (<TextFac>{row.amenities}</TextFac>) },
        { property: 'price', label: 'Price', display: (row) => (<TextRate>{row.price}<span>/night</span></TextRate>) },
        { property: 'offer', label: 'Offer Price', display: (row) => (<TextOffer>{row.offer}<span>/night</span></TextOffer>) },
        { property: 'status', label: 'Status', display: (row) => (
            row.status === 'Available' ? <Available>{row.status}</Available> : <Booked>{row.status}</Booked>) 
        },
    ];

    const actions = [
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: removeRoom },
        { icon: <TiEdit />, name: 'Edit', action: editRoom },
    ];
    
    return(
        <RoomsContent>
            <Table data={roomsList} cols={cols} actions={actions}/>
        </RoomsContent>
    );
}