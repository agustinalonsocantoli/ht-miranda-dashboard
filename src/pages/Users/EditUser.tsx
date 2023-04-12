// React
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Redux
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { getUser ,editUser } from '../../features/usersSlice';
// Components
import { FormUser } from '../../components/FormUser/FormUser';
// Styled
import { ContentBox } from './GeneralStyled'
import { Users } from '../../interfaces/UsersInt';

export const EditUser = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useAppSelector(state => state.usersReducer);

    const [ currentUser, setCurrentUser ] = useState<Users>(null);

    useEffect(() => {
        dispatch(getUser(id));

        setCurrentUser(user)
    }, [dispatch, id, user])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        
        setCurrentUser(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(editUser(currentUser));

        try{
            (e.target as HTMLFormElement).reset();

            navigate('/users');
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <ContentBox>
            <FormUser 
            typeForm={'Edit Employee Data'} 
            edit={true} 
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            currentUser={currentUser}
            />
        </ContentBox>
    );
}