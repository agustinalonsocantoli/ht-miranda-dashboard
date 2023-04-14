// React
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { useAppDispatch } from '../../app/hook';
import { addRoom } from '../../features/roomsSlice';
// Components
import { FormRoom } from '../../components/FormRoom/FormRoom';
// Styled
import { BoxContent } from './GeneralStyled';

export const NewRoom = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [ currentRoom, setCurrentRoom ] = useState({
        src: '',
        name: '',
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addRoom(currentRoom))

        try {
            (e.target as HTMLFormElement).reset();
            navigate('/rooms')
        } catch(err) {
            console.log(err);
        } 
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