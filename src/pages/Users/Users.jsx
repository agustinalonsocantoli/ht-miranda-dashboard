// React
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../../features/usersSlice";
// Components
import { Table } from '../../components/Table/Table'
// Icons
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { MdOutlinePhone } from "react-icons/md";
import { formatDate } from "../../export/functions";
// Styled
import { UsersContent, NameBox, Text, TextDate, TextEmail, TextCont, Active, Inactive, Options, Filters } from './UsersStyled';


export const Users = () => {
    const { users } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ usersList , setUsersList ] = useState([]);
    const [ order, setOrder ] = useState('start');
    const [ search, setSearch ] = useState('');
    const [ status, setStatus] = useState('');

    useEffect(() => {
        if(users.length === 0){
            dispatch(getUsers());
        }

    }, [dispatch, users]);

    useEffect(() => {
        const usersOrderBy = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

        usersOrderBy.sort((a, b) => {
            if(a[order] > b[order]) {
                return 1
            } else if (a[order] < b[order]) {
                return -1
            }
            return 0
        });

        const usersFilter = usersOrderBy.filter(user => user.status !== status)

        setUsersList(usersFilter)
    }, [order, search, users, status])

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
        { property: 'start', label: 'Start Date', display: (row) => (<TextDate>{formatDate(row.start)}</TextDate>) },
        { property: 'job', label: 'Description', display: (row) => (<Text>{row.job}</Text>) },
        { property: 'contact', label: 'Contact', display: (row) => (<TextCont><MdOutlinePhone />{row.contact}</TextCont>) },
        { property: 'status', label: 'Status', display: (row) => (
            row.status === 'active' ? <Active>{row.status}</Active> : <Inactive>{row.status}</Inactive>) 
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
                    <p onClick={() => setStatus('')}>All Employee</p>
                    <p onClick={() => setStatus('active')}>Active Employee</p>
                    <p onClick={() => setStatus('inactive')}>Inactive Employee</p>
                </Filters>
                
                <input type="text" placeholder="Search User" onChange={({ target }) => setSearch(target.value)}/>

                <div>
                    <button onClick={() => navigate('/users/new-user')}>+ New Employee</button>

                    <select value={order} onChange={({ target }) => setOrder(target.value)}>
                        <option value="start">Start Date</option>
                        <option value="name">Name</option>
                    </select>
                </div>
            </Options>

            <Table data={usersList} cols={cols} actions={actions}/>
        </UsersContent>
    );
}