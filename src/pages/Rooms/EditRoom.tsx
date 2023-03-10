// React
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Redux
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { getRoom, editRoom } from '../../features/roomsSlice';
// Component
import { FormRoom } from '../../components/FormRoom/FormRoom';
// Styled
import { BoxContent } from './GeneralStyled';
import { Rooms } from '../../interfaces/RoomsInt';

export const EditRoom = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { room } = useAppSelector(state => state.roomsReducer);

    const [ currentRoom, setCurrentRoom ] = useState<Rooms>(null);
    
    useEffect(() => {
        dispatch(getRoom(id))

        setCurrentRoom(room)
    }, [dispatch, id, room]);

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
        dispatch(editRoom(currentRoom))

        try{
            (e.target as HTMLFormElement).reset();
            navigate('/rooms')
        } catch(err) {
            console.log(err);
        }
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