import { useParams } from "react-router-dom";
import { dataUsers } from '../../data/DataUsers'
import { Form } from '../../components/Form/Form';
import { useState } from "react";

export const EditUser = () => {

    const { id } = useParams();
    const userSelect = dataUsers.find(book => book.id === id);

    const [ newUser, setNewUser ] = useState(false);

    return(
        <div style={{margin: 30}}>

            {!newUser && <div>
                <h1>COMPONENTE EDITAR USUARIO</h1>
                <ul>
                    <img src={userSelect.src} alt="user" style={{width: 70, height: 70}} />
                    <li>{userSelect.id}</li>
                    <li>{userSelect.name}</li>
                </ul>

                <button onClick={() => setNewUser(true)} style={{marginTop: 20, marginBottom: 20}}>NEW USER</button>
            </div> }

            {newUser && <Form setNewUser={setNewUser} typeForm={'Register New Employee'}/>}
        </div>
    );
}