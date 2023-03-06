// React
import React from 'react';
import { useState } from 'react';
// Redux
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { addUser } from '../../features/usersSlice';
// Components
import { FormUser } from '../../components/FormUser/FormUser';
// Styled
import { ContentBox } from './GeneralStyled'

export const NewUser = () => {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector(state => state.usersReducer);

    const [ currentUser, setCurrentUser ] = useState({
        src: users[0].src,
        name: '',
        id: `U000${users.length + 1}`,
        email: '',
        start: '',
        job: '',
        contact: '',
        status: '',
        password: ''
    });

    const handleInput = (e: any) => {
        const { name, value} = e.target
        setCurrentUser(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = () => {
        dispatch(addUser(currentUser));
    }

    return(
        <ContentBox>
            <FormUser typeForm={'Register New Employee'}
            edit={false}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            currentUser={currentUser}
            />
        </ContentBox>
    );
}