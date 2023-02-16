import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataUsers } from '../../data/DataUsers'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";


export const Users = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const deleteUser = (id) => {
        console.log(`Delete user ${id}`);
    }

    const editUser = (id) => {
        console.log(`Edit user ${id}`);
    }

    const cols = [
        { property: ['src' ,'id', 'name', 'joined'], label: 'Name', display: (src, id, name, joined) => (
            <div>
                <img src={src} alt={`img/${id}`} />

                <div>
                    <p>{name}</p>
                    <p>{id}</p>
                    <p>{joined}</p>
                </div>
            </div>) 
        },
        { property: 'job', label: 'Job Desk' },
        { property: 'schedule', label: 'Schedule' },
        { property: 'contact', label: 'Contact' },
        { property: 'status', label: 'Status' },
    ];

    const actions = [
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: deleteUser },
        { icon: <TiEdit />, name: 'Edit', action: editUser },
    ];

    return(
        <div>
            <Table data={dataUsers} cols={cols} actions={actions}/>
        </div>
    );
}