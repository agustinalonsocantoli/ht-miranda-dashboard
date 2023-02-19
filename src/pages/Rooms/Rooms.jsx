import { Table } from '../../components/Table/Table'
import { dataRooms } from '../../data/DataRooms'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RoomsContent, NameBox, Text, TextFac, TextRate, Available, Booked, TextOffer } from './RoomsStyled';

export const Rooms = () => {
    const deleteRoom = (id) => {
        console.log(`Delete room ${id}`);
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
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: deleteRoom },
        { icon: <TiEdit />, name: 'Edit', action: editRoom },
    ];
    
    return(
        <RoomsContent>
            <Table data={dataRooms} cols={cols} actions={actions}/>
        </RoomsContent>
    );
}