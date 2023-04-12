// React
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Redux
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { getUsers, deleteUser } from "../../features/usersSlice";
// Components
import { Table } from '../../components/Table/Table'
// Icons
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { MdOutlinePhone } from "react-icons/md";
// Styled
import { UsersContent, NameBox, Text, TextDate, TextEmail, TextCont, Active, Inactive, Options, Filters } from './UsersStyled';
// Functions
import { FormDate } from '../../export/functions.js';

export const Users = () => {
    const { users, statusData } = useAppSelector(state => state.usersReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [ usersList , setUsersList ] = useState([]);
    const [ order, setOrder ] = useState('start');
    const [ search, setSearch ] = useState('');
    const [ status, setStatus] = useState('');

    useEffect(() => {
        if(statusData === "idle"){
            dispatch(getUsers());
        }
        
    }, [dispatch, statusData]);

    useEffect(() => {
        if(users){
            const usersOrderBy = users.filter((user: any) => user['name'].toLowerCase().includes(search.toLowerCase()));

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
        }

    }, [order, search, users, status])

    const removeUser = (id: string) => {
        dispatch(deleteUser(id));
        
        const updateUserList = usersList.filter(user => user._id !== id);
        setUsersList(updateUserList);
    }

    const cols = [
        { property: ['src' ,'id', 'name'], label: 'Name', display: (row: any) => (
            <NameBox as={Link} to={`/users/${row._id}`}>
                <img src={row.src} alt={`img/${row._id}`} />

                <div>
                    <p>{row.name}</p>
                    <p>{row._id}</p>
                </div>
            </NameBox>) 
        },
        { property: 'email', label: 'Email', display: (row: any) => (<TextEmail>{row.email}</TextEmail>) },
        { property: 'start', label: 'Start Date', display: (row: any) => (<TextDate>{FormDate(row.start)}</TextDate>) },
        { property: 'job', label: 'Description', display: (row: any) => (<Text>{row.job}</Text>) },
        { property: 'contact', label: 'Contact', display: (row: any) => (<TextCont><MdOutlinePhone />{row.contact}</TextCont>) },
        { property: 'status', label: 'Status', display: (row: any) => (
            row.status === 'active' ? <Active>{row.status}</Active> : <Inactive>{row.status}</Inactive>) 
        },
    ];

    const actions = [
        { icon: <MdOutlineDeleteForever />, name: 'Delete', action: removeUser },
        { icon: <TiEdit />, name: 'Edit', action: (id: string) => navigate(`/users/${id}`) },
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