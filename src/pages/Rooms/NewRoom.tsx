// React
import React from 'react';
import { useState } from 'react';
// Redux
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { addRoom } from '../../features/roomsSlice';
// Components
import { FormRoom } from '../../components/FormRoom/FormRoom';
// Styled
import { BoxContent } from './GeneralStyled';

export const NewRoom = () => {
    const dispatch = useAppDispatch();
    const { rooms } = useAppSelector(state => state.roomsReducer)

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

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        let valUpdate: string[] | string;

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
            edit={false} 
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            currentRoom={currentRoom}
            />
        </BoxContent>
    );
}