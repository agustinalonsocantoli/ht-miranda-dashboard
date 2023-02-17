import { useParams } from "react-router-dom";
import { dataUsers } from '../../data/DataUsers'

export const EditUser = () => {

    const { id } = useParams();
    const userSelect = dataUsers.find(book => book.id === id);

    return(
        <div>
            <h1>COMPONENTE EDITAR USUARIO</h1>
            <ul>
                <img src={userSelect.src} alt="user" style={{width: 70, height: 70}} />
                <li>{userSelect.id}</li>
                <li>{userSelect.name}</li>
            </ul>
        </div>
    );
}