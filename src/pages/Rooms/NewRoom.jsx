// React
import { useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addRoom } from '../../features/roomsSlice';
// Components
import { FormRoom } from '../../components/FormRoom/FormRoom';
// Styled
import { BoxContent } from './GeneralStyled';

export const NewRoom = () => {
    const dispatch = useDispatch();
    const { rooms } = useSelector(state => state.roomsReducer)

    const [ currentRoom, setCurrentRoom ] = useState({
        src: rooms[0].src,
        name: '',
        id: `R0${rooms.length + 1}`, 
        type: '',
        amenities: [],
        price: 0,
        offer: 0,
        status: '',
    });

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        let valUpdate;

        if (type === "checkbox") {
            let newVal = [...currentRoom[name]];

            if (checked) {
                newVal.push(value);
            } else {
                newVal = newVal.filter(item => item !== value);
            }

            valUpdate = newVal;
        } else {
            valUpdate = value;
        }
        setCurrentRoom(prev => ({ ...prev, [name]: valUpdate }));
    };

    const handleSubmit = () => {
        dispatch(addRoom(currentRoom))
    }

    return(
        <BoxContent>
            <FormRoom 
            typeForm={'Register New Room'} 
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            currentRoom={currentRoom}
            />
        </BoxContent>
    );
}