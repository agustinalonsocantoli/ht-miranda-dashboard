import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataRooms } from '../../data/DataRooms'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { NameBox, Text, TextFac, TextRate, Available, Booked, TextOffer } from './RoomsStyled';

export const Rooms = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const deleteUser = (id) => {
        console.log(`Delete room ${id}`);
    }

    const editUser = (id) => {
        console.log(`Edit room ${id}`);
    }

    const cols = [
        { property: ['src' ,'name', 'id'], label: 'Room', display: (src, id, name) => (
            <NameBox>
                <img src={src} alt={`img/${id}`} />
                
                <div className="rooms">
                    <Text>{name}</Text>
                    <p>{id}</p>
                </div>
            </NameBox>) 
        },
        { property: ['type'], label: 'Type', display: (type) => (<Text>{type}</Text>) },
        { property: ['amenities'], label: 'Amenities', display: (amenities) => (<TextFac>{amenities}</TextFac>) },
        { property: ['price'], label: 'Price', display: (price) => (<TextRate>{price}<span>/night</span></TextRate>) },
        { property: ['offer'], label: 'Offer Price', display: (offer) => (<TextOffer>{offer}<span>/night</span></TextOffer>) },
        { property: ['status'], label: 'Status', display: (status) => (
            status === 'Available' ? <Available>{status}</Available> : <Booked>{status}</Booked>) 
        },
    ];

    const actions = [
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: deleteUser },
        { icon: <TiEdit />, name: 'Edit', action: editUser },
    ];
    
    return(
        <div>
            <Table data={dataRooms} cols={cols} actions={actions}/>
        </div>
    );
}