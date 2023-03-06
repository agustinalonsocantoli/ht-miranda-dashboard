// React
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Redux
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { getRoom, editRoom } from '../../features/roomsSlice';
// Component
import { FormRoom } from '../../components/FormRoom/FormRoom';
// Styled
import { BoxContent } from './GeneralStyled';
import { Rooms } from '../../interfaces/RoomsInt';

export const EditRoom = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { room } = useAppSelector(state => state.roomsReducer);

    const [ currentRoom, setCurrentRoom ] = useState<Rooms>(null);
    
    useEffect(() => {
        dispatch(getRoom(id))

        setCurrentRoom(room)
    }, [dispatch, id, room]);

    const handleInput = (e: any) => {
        const { name, value, type, checked } = e.target;
        let valUpdate: string[];

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
        dispatch(editRoom(currentRoom))
    }

    return(
        <BoxContent>
            <FormRoom 
            typeForm={'Edit Room'} 
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            currentRoom={currentRoom}
            edit={true}/>
        </BoxContent>
    );
}