import { useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { addUser } from '../../features/usersSlice';
import { useNavigate } from 'react-router-dom';
import { FormBox, Label, Input, FileBox, Text, StateBox, Select, Date, BtnBox, User } from './FormStyled'

export const FormUser = ({ typeForm, edit, amendUser }) => {
    const navigate = useNavigate();
    const { users } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ start, setStart ] = useState();
    const [ job, setJob ] = useState();
    const [ contact, setContact ] = useState();
    const [ status, setStatus ] = useState();
    const [ password, setPassword ] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            src: users[0].src,
            name: name,
            id: `U000${users.length + 1}`,
            email: email,
            start: start,
            job: job,
            contact: contact,
            status: status,
            password: password,
        }
        
        dispatch(addUser(newUser))

        e.target.reset();
        navigate('/users')
    }

    return(
        <FormBox>
            <h1>{typeForm}</h1>

            {edit && 
            <User>
                <img src={amendUser.src} alt={`img/${amendUser.id}`} />
                <h3>ID {amendUser.id}</h3>
            </User>
            }

            <form onSubmit={handleSubmit}>
                <Label>Name</Label>
                <Input type="text" name='name' defaultValue={edit ? amendUser.name : ''} onChange={({ target }) => setName(target.value)}/>

                <Label>Email</Label>
                <Input type="email" name='email' defaultValue={edit ? amendUser.email : ''} onChange={({ target }) => setEmail(target.value)}/>

                <Label>Phone Number</Label>
                <Input type="text" name='phone' defaultValue={edit ? amendUser.contact : ''} onChange={({ target }) => setContact(target.value)}/>

                <FileBox>
                    <label>Upload Image</label>
                    <input type="file" name='src' />
                </FileBox>

                <Label>Start Date</Label>
                <Date type="date" name='date' onChange={({ target }) => setStart(target.value)}/>

                <Label>Job</Label>
                <Select defaultValue={'job'} name='job'>
                    <option value="job" disabled>Select Job</option>
                    <option value="manager">Manager</option>
                    <option value="reception">Reception</option>
                    <option value="service">Rooms Service</option>
                </Select>

                <Label>Functions Description</Label>
                <textarea name='description' defaultValue={edit ? amendUser.job : ''} onChange={({ target }) => setJob(target.value)}></textarea>
                
                <Text>State</Text>
                <StateBox>
                    <input name='state' type="radio" value={'active'} onChange={({ target }) => setStatus(target.value)}/>
                    <label>Active</label>
                    <input name='state' type="radio" value={'inactive'} onChange={({ target }) => setStatus(target.value)}/>
                    <label>Inactive</label>
                </StateBox>
                
                <Label>Password</Label>
                <Input type="password" name='password' onChange={({ target }) => setPassword(target.value)}/>

                <BtnBox>
                    <button type='submit'>Save</button>
                    <button onClick={() => navigate('/users')}>Cancel</button>
                </BtnBox>
            </form>
        </FormBox>
    );
}