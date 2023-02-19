import { FormBox, Close, Label, Input, FileBox, Text, StateBox, Select, Date } from './FormStyled'
import { AiOutlineCloseSquare } from "react-icons/ai";

export const Form = ({ setNewUser, typeForm }) => {
    return(
        <FormBox>
            <Close onClick={() => setNewUser(false)}><AiOutlineCloseSquare /></Close>

            <h1>{typeForm}</h1>
            <form>
                <FileBox>
                    <Label>Upload Image</Label>
                    <input type="file" />
                </FileBox>
                
                <Label>First Name</Label>
                <Input type="text" />

                <Label>Last Name</Label>
                <Input type="text" />

                <Label>Job</Label>
                <Select>
                    <option selected="true" disabled="disabled">Select Job</option>
                    <option value="manager">Manager</option>
                    <option value="reception">Reception</option>
                    <option value="service">Rooms Service</option>
                </Select>

                <Label>Email</Label>
                <Input type="email" />

                <Label>Phone Number</Label>
                <Input type="number" />

                <Label>Start Date</Label>
                <Date type="date" />

                <Label>Functions Description</Label>
                <textarea></textarea>
                
                <Text>State</Text>
                <StateBox>
                    <input name='state' type="radio" />
                    <label>Active</label>
                    <input name='state' type="radio" />
                    <label>Inactive</label>
                </StateBox>
                
                <Label>Password</Label>
                <Input type="password" />
            </form>
        </FormBox>
    );
}