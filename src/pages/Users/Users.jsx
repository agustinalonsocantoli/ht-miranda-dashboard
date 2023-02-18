import { Link } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataUsers } from '../../data/DataUsers'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { MdOutlinePhone } from "react-icons/md";
import { NameBox, Text, TextDate, TextEmail, TextCont, Active, Inactive } from './UsersStyled';


export const Users = () => {
    const deleteUser = (id) => {
        console.log(`Delete user ${id}`);
    }

    const editUser = (id) => {
        console.log(`Edit user ${id}`);
    }

    const cols = [
        { property: ['src' ,'id', 'name'], label: 'Name', display: (row) => (
            <NameBox as={Link} to={`/users/${row.id}`}>
                <img src={row.src} alt={`img/${row.id}`} />

                <div>
                    <p>{row.name}</p>
                    <p>{row.id}</p>
                </div>
            </NameBox>) 
        },
        { property: 'email', label: 'Email', display: (row) => (<TextEmail>{row.email}</TextEmail>) },
        { property: 'start', label: 'Start Date', display: (row) => (<TextDate>{row.start}</TextDate>) },
        { property: 'job', label: 'Description', display: (row) => (<Text>{row.job}</Text>) },
        { property: 'contact', label: 'Contact', display: (row) => (<TextCont><MdOutlinePhone />{row.contact}</TextCont>) },
        { property: 'status', label: 'Status', display: (row) => (
            row.status === 'ACTIVE' ? <Active>{row.status}</Active> : <Inactive>{row.status}</Inactive>) 
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