// React
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Icons
import { IoImagesOutline } from "react-icons/io5";
// Styled
import { FormBox, Label, Input, LabelImg, Text, StateBox, Select, Date, BtnBox, User, Loading } from './FormStyled'
// Function
import { FormDate } from "../../export/functions.js";
// Mui
import CircularProgress from '@mui/material/CircularProgress';

export const FormUser = ({ typeForm, edit, handleSubmit, handleInput, currentUser }) => {
    const navigate = useNavigate();

    const cancelForm = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/users')
    }

    if(currentUser === null || currentUser === undefined){
        return(
            <Loading>
                <CircularProgress color="error" size={200} />
            </Loading>
        );
    }

    return(
        <FormBox>
            <h1>{typeForm}</h1>

            {edit && 
            <User>
                <img src={currentUser.src} alt={`img/${currentUser && currentUser._id}`} />
                <h3>ID {currentUser._id}</h3>
            </User>
            }

            <form onSubmit={handleSubmit}>

                <Label>Name</Label>
                <Input type="text" name='name' value={currentUser.name} onChange={handleInput}/>

                <Label>Email</Label>
                <Input type="email" name='email' value={currentUser.email} onChange={handleInput}/>

                <Label>Phone Number</Label>
                <Input type="text" name='contact' value={currentUser.contact} onChange={handleInput}/>

                <LabelImg>URL Image <IoImagesOutline /></LabelImg>
                <textarea name='src' value={currentUser.src} onChange={handleInput}></textarea>

                <Label>Start Date</Label>
                <Date type="date" name='start' value={currentUser && FormDate(currentUser.start)} onChange={handleInput}/>

                <Label>Job</Label>
                <Select defaultValue={'task'} name='task'>
                    <option value="task" disabled>Select Job</option>
                    <option value="manager">Manager</option>
                    <option value="reception">Reception</option>
                    <option value="service">Rooms Service</option>
                </Select>

                <Label>Functions Description</Label>
                <textarea name='job' value={currentUser.job} onChange={handleInput}></textarea>
                
                <Text>Status</Text>
                <StateBox>
                    <input 
                    name='status' 
                    type="radio" 
                    value={'active'} 
                    checked={currentUser.status === "active"} 
                    onChange={handleInput}/>
                    <label>Active</label>

                    <input 
                    name='status' 
                    type="radio" 
                    value={'inactive'}
                    checked={currentUser.status === "inactive"} 
                    onChange={handleInput}/>
                    <label>Inactive</label>
                </StateBox>
                
                <Label>Password</Label>
                <Input type="password" name='password' value={currentUser.password} onChange={handleInput}/>

                <BtnBox>
                    <button type='submit'>Save</button>
                    <button onClick={cancelForm}>Cancel</button>
                </BtnBox>
            </form>
        </FormBox>
    );
}