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
        discount: 0,
        status: '',
    });

    console.log(currentRoom);

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