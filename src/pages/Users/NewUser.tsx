// React
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { useAppDispatch } from '../../app/hook';
import { addUser } from '../../features/usersSlice';
// Components
import { FormUser } from '../../components/FormUser/FormUser';
// Styled
import { ContentBox } from './GeneralStyled'

export const NewUser = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [ currentUser, setCurrentUser ] = useState({
        src: '',
        name: '',
        email: '',
        start: '',
        job: '',
        contact: '',
        status: '',
        password: ''
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target
        setCurrentUser(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addUser(currentUser));

        try{
            (e.target as HTMLFormElement).reset(); 
            navigate('/users');
        } catch(err) {
            console.log(err);
        }
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