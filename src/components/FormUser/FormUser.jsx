import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormBox, Label, Input, FileBox, Text, StateBox, Select, Date, BtnBox, User } from './FormStyled'

export const FormUser = ({ typeForm, edit, editUser }) => {
    const navigate = useNavigate();
    const [ newUser, setNewUser ] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <FormBox>
            <h1>{typeForm}</h1>

            {edit && 
            <User>
                <img src={editUser.src} alt={`img/${editUser.id}`} />
                <h3>ID {editUser.id}</h3>
            </User>
            }

            <form onSubmit={handleSubmit}>
                <Label>Name</Label>
                <Input type="text" name='name' defaultValue={edit ? editUser.name : newUser.name} onChange={({ target }) => setNewUser({ name: target.value })}/>

                <Label>Email</Label>
                <Input type="email" name='email' defaultValue={edit ? editUser.email : ''} onChange={({ target }) => setNewUser({ email: target.value })}/>

                <Label>Phone Number</Label>
                <Input type="text" name='phone' defaultValue={edit ? editUser.contact : ''} onChange={({ target }) => setNewUser({ contact: target.value})}/>

                <FileBox>
                    <label>Upload Image</label>
                    <input type="file" name='src' onChange={({ target }) => setNewUser({ src: target.value})}/>
                </FileBox>

                <Label>Start Date</Label>
                <Date type="date" name='date' onChange={({ target }) => setNewUser({ date: target.value})}/>

                <Label>Job</Label>
                <Select defaultValue={'job'} name='job'>
                    <option value="job" disabled>Select Job</option>
                    <option value="manager">Manager</option>
                    <option value="reception">Reception</option>
                    <option value="service">Rooms Service</option>
                </Select>

                <Label>Functions Description</Label>
                <textarea name='description' defaultValue={edit ? editUser.job : ''} onChange={({ target }) => setNewUser({ job: target.value})}></textarea>
                
                <Text>State</Text>
                <StateBox>
                    <input name='state' type="radio" value={'active'} onChange={({ target }) => setNewUser({ status: target.value})}/>
                    <label>Active</label>
                    <input name='state' type="radio" value={'inactive'} onChange={({ target }) => setNewUser({ status: target.value})}/>
                    <label>Inactive</label>
                </StateBox>
                
                <Label>Password</Label>
                <Input type="password" name='password' onChange={({ target }) => setNewUser({ password: target.value})}/>

                <BtnBox>
                    <button type='submit'>Save</button>
                    <button onClick={() => navigate('/users')}>Cancel</button>
                </BtnBox>
            </form>
        </FormBox>
    );
}