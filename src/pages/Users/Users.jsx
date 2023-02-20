import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../../features/usersSlice";
import { Link, useNavigate } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { MdOutlinePhone } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { UsersContent, NameBox, Text, TextDate, TextEmail, TextCont, Active, Inactive, Options, Filters } from './UsersStyled';


export const Users = () => {
    const { users } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    const [ usersList , setUsersList ] = useState([]);

    useEffect(() => {
        if(users.length === 0){
            dispatch(getUsers());
        }

        setUsersList(users)

    }, [dispatch, users]);

    const navigate = useNavigate();

    const removeUser = (id) => {
        dispatch(deleteUser(id))
    }

    const amendUser = (id) => {
        navigate(`/users/${id}`)
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
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: removeUser },
        { icon: <TiEdit />, name: 'Edit', action: amendUser },
    ];

    return(
        <UsersContent>
            <Options>
                <Filters>
                    <p>All Employee</p>
                    <p>Active Employee</p>
                    <p>Inactive Employee</p>
                </Filters>
                
                <form>
                    <input type="text" placeholder="Search User"/>
                    <button><MdManageSearch /></button>
                </form>

                <div>
                    <button onClick={() => navigate('/users/new-user')}>+ New Employee</button>

                    <select defaultValue={'date'}>
                        <option value="date">Start Date</option>
                        <option value="name">Name</option>
                    </select>
                </div>
            </Options>

            <Table data={usersList} cols={cols} actions={actions}/>
        </UsersContent>
    );
}