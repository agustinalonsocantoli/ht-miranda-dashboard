import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataUsers } from '../../data/DataUsers'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { MdOutlinePhone } from "react-icons/md";
import { NameBox, Text, TextDate, TextEmail, TextCont, Active, Inactive } from './UsersStyled';


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
        { property: ['src' ,'id', 'name'], label: 'Name', display: (src, id, name) => (
            <NameBox as={Link} to={`/users/${id}`}>
                <img src={src} alt={`img/${id}`} />

                <div>
                    <p>{name}</p>
                    <p>{id}</p>
                </div>
            </NameBox>) 
        },
        { property: ['email'], label: 'Email', display: (email) => (<TextEmail>{email}</TextEmail>) },
        { property: ['start'], label: 'Start Date', display: (start) => (<TextDate>{start}</TextDate>) },
        { property: ['job'], label: 'Description', display: (job) => (<Text>{job}</Text>) },
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