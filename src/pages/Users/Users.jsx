import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from '../../components/Table/Table'
import { dataUsers } from '../../data/DataUsers'


export const Users = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const dataHead = ['User', 'Order Date', 'Check In', 'Check Out', 'Special Request', 'Room Type', 'Status'];
    
    return(
        <div>
            <h1>Users</h1>
            <Table dataBody={dataUsers} dataHead={dataHead}/>
        </div>
    );
}