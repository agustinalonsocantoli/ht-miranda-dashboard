// React
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getRoom, editRoom } from '../../features/roomsSlice';
// Component
import { FormRoom } from '../../components/FormRoom/FormRoom';
// Styled
import { BoxContent } from './GeneralStyled';

export const EditRoom = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { room } = useSelector(state => state.roomsReducer);

    const [ currentRoom, setCurrentRoom ] = useState({});
    
    useEffect(() => {
        dispatch(getRoom(id))

        setCurrentRoom(room)
    }, [dispatch, id, room]);

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        let valUpdate;

        if (type === "checkbox") {
            const newVal = [...currentRoom[name]];

            if (checked) {
                newVal.push(value);
            } else {
                const index = newVal.indexOf(value);
                newVal.splice(index, 1);
            }

            valUpdate = newVal;
        } else {
            valUpdate = value;
        }
        setCurrentRoom(prev => ({ ...prev, [name]: valUpdate }));
    };

    const handleSubmit = () => {
        dispatch(editRoom(currentRoom))
    }

    return(
        <BoxContent>
            <FormRoom 
            typeForm={'Edit Room'} 
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            currentRoom={currentRoom}/>
        </BoxContent>
    );
}