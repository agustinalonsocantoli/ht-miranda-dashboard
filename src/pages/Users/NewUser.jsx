// React
import { useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../features/usersSlice';
// Components
import { FormUser } from '../../components/FormUser/FormUser';
// Styled
import { ContentBox } from './GeneralStyled'

export const NewUser = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.usersReducer);

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

    const handleInput = (e) => {
        const { name, value} = e.target
        setCurrentUser(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = () => {
        dispatch(addUser(currentUser));
    }

    return(
        <ContentBox>
            <FormUser typeForm={'Register New Employee'}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            currentUser={currentUser}
            />
        </ContentBox>
    );
}