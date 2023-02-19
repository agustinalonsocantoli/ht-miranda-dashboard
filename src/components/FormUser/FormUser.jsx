import { useNavigate } from 'react-router-dom';
import { FormBox, Label, Input, FileBox, Text, StateBox, Select, Date, BtnBox, User } from './FormStyled'

export const FormUser = ({ typeForm, edit, editUser }) => {
    const navigate = useNavigate();

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
                <Input type="text" name='name' defaultValue={edit ? editUser.name : ''}/>

                <Label>Email</Label>
                <Input type="email" name='email' defaultValue={edit ? editUser.email : ''}/>

                <Label>Phone Number</Label>
                <Input type="text" name='phone' defaultValue={edit ? editUser.contact : ''}/>

                <FileBox>
                    <label>Upload Image</label>
                    <input type="file" name='src'/>
                </FileBox>

                <Label>Start Date</Label>
                <Date type="date" name='date'/>

                <Label>Job</Label>
                <Select defaultValue={'job'} name='job'>
                    <option value="job" disabled>Select Job</option>
                    <option value="manager">Manager</option>
                    <option value="reception">Reception</option>
                    <option value="service">Rooms Service</option>
                </Select>

                <Label>Functions Description</Label>
                <textarea name='description' defaultValue={edit ? editUser.job : ''}></textarea>
                
                <Text>State</Text>
                <StateBox>
                    <input name='state' type="radio" value={'active'}/>
                    <label>Active</label>
                    <input name='state' type="radio" value={'inactive'}/>
                    <label>Inactive</label>
                </StateBox>
                
                <Label>Password</Label>
                <Input type="password" name='password'/>

                <BtnBox>
                    <button type='submit'>Save</button>
                    <button onClick={() => navigate('/users')}>Cancel</button>
                </BtnBox>
            </form>
        </FormBox>
    );
}