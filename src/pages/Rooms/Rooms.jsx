import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataRooms } from '../../data/DataRooms'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { NameBox, Text, TextFac, TextRate, Available, Booked } from './RoomsStyled';

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
        { property: ['src' ,'name', 'id'], label: 'Room Name', display: (src, id, name) => (
            <NameBox>
                <img src={src} alt={`img/${id}`} />
                
                <div className="rooms">
                    <Text>{name}</Text>
                    <p>{id}</p>
                </div>
            </NameBox>) 
        },
        { property: ['bed'], label: 'Bed Type', display: (bed) => (<Text>{bed}</Text>) },
        { property: ['floor'], label: 'Room Floor', display: (floor) => (<Text>{floor}</Text>) },
        { property: ['facilities'], label: 'Facilities', display: (facilities) => (<TextFac>{facilities}</TextFac>) },
        { property: ['rate'], label: 'Rate', display: (rate) => (<TextRate>{rate}<span>/night</span></TextRate>) },
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