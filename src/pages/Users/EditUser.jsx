// React
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUser ,editUser } from '../../features/usersSlice';
// Components
import { FormUser } from '../../components/FormUser/FormUser';
// Styled
import { ContentBox } from './GeneralStyled'

export const EditUser = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const { user } = useSelector(state => state.usersReducer);

    const [ currentUser, setCurrentUser ] = useState({});

    useEffect(() => {
        dispatch(getUser(id));

        setCurrentUser(user)
    }, [dispatch, id, user])

    const handleInput = (e) => {
        const { name, value} = e.target
        
        setCurrentUser(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = () => {
        dispatch(editUser(currentUser));
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