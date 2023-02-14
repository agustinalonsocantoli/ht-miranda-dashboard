import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Board } from '../../components/Board/Board'
import { dataUsers } from './DataUsers'


export const Users = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    const dataHead = ['User', 'Order Date', 'Check In', 'Check Out', 'Special Request', 'Room Type', 'Status'];
    
    return(
        <div>
            <h1>Users</h1>
            <Board dataBody={dataUsers} dataHead={dataHead}/>
        </div>
    );
}