import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataUsers } from '../../data/DataUsers'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { MdOutlinePhone } from "react-icons/md";
import { NameBox, Text, TextSc, TextCont, Active, Inactive } from './UsersStyled';


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
            <NameBox>
                <img src={src} alt={`img/${id}`} />

                <div>
                    <p>{name}</p>
                    <p>{id}</p>
                    <p>{joined}</p>
                </div>
            </NameBox>) 
        },
        { property: ['job'], label: 'Job Desk', display: (bed) => (<Text>{bed}</Text>) },
        { property: ['schedule'], label: 'Schedule', display: (schedule) => (<TextSc>{schedule}</TextSc>) },
        { property: ['contact'], label: 'Contact', display: (contact) => (<TextCont><MdOutlinePhone />{contact}</TextCont>) },
        { property: ['status'], label: 'Status', display: (status) => (
            status === 'ACTIVE' ? <Active>{status}</Active> : <Inactive>{status}</Inactive>) 
        },
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