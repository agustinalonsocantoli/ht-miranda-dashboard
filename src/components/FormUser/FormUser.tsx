// React
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Icons
import { IoImagesOutline } from "react-icons/io5";
// Styled
import { FormBox, Label, Input, FileBox, Text, StateBox, Select, Date, BtnBox, User } from './FormStyled'

export const FormUser = ({ typeForm, edit, handleSubmit, handleInput, currentUser }) => {
    const navigate = useNavigate();

    return(
        <FormBox>
            <h1>{typeForm}</h1>

            {edit && 
            <User>
                <img src={currentUser?.src} alt={`img/${currentUser && currentUser.id}`} />
                <h3>ID {currentUser?.id}</h3>
            </User>
            }

            <form 
            onSubmit={(e: React.FormEvent) => 
            {e.preventDefault(); 
            handleSubmit(); 
            (e.target as HTMLFormElement).reset(); 
            navigate('/users');
            }}>

                <Label>Name</Label>
                <Input type="text" name='name' value={currentUser?.name} onChange={handleInput}/>

                <Label>Email</Label>
                <Input type="email" name='email' value={currentUser?.email} onChange={handleInput}/>

                <Label>Phone Number</Label>
                <Input type="text" name='contact' value={currentUser?.contact} onChange={handleInput}/>

                <FileBox>
                    <label>Upload Image<IoImagesOutline /></label>
                    <input type="file" name='src' />
                </FileBox>

                <Label>Start Date</Label>
                <Date type="date" name='start' value={currentUser?.start} onChange={handleInput}/>

                <Label>Job</Label>
                <Select defaultValue={'task'} name='task'>
                    <option value="task" disabled>Select Job</option>
                    <option value="manager">Manager</option>
                    <option value="reception">Reception</option>
                    <option value="service">Rooms Service</option>
                </Select>

                <Label>Functions Description</Label>
                <textarea name='job' value={currentUser?.job} onChange={handleInput}></textarea>
                
                <Text>Status</Text>
                <StateBox>
                    <input 
                    name='status' 
                    type="radio" 
                    value={'active'} 
                    checked={currentUser?.status === "active"} 
                    onChange={handleInput}/>
                    <label>Active</label>

                    <input 
                    name='status' 
                    type="radio" 
                    value={'inactive'}
                    checked={currentUser?.status === "inactive"} 
                    onChange={handleInput}/>
                    <label>Inactive</label>
                </StateBox>
                
                <Label>Password</Label>
                <Input type="password" name='password' value={currentUser?.password} onChange={handleInput}/>

                <BtnBox>
                    <button type='submit'>Save</button>
                    <button onClick={(e: React.FormEvent) => 
                    {e.preventDefault(); 
                    navigate('/users');
                    }}>
                        Cancel
                    </button>
                </BtnBox>
            </form>
        </FormBox>
    );
}