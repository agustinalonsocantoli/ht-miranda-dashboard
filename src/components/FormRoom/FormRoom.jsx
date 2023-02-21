// React
import { useNavigate } from 'react-router-dom';
// Icons
import { MdOutlineAir } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { GiTowel } from "react-icons/gi";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import { BiWifi } from "react-icons/bi";
import { RiComputerFill } from "react-icons/ri";
import { IoImagesOutline } from "react-icons/io5";
import { TbHotelService } from "react-icons/tb";
// Styled
import { FormBox, Label, Input, FileBox, Text, StateBox, Select, BtnBox, Check, Room} from './FormStyled'

export const FormRoom = ({ typeForm, edit, handleSubmit, handleInput, currentRoom }) => {
    const navigate = useNavigate();

    return(
        <FormBox>
            <h1>{typeForm}</h1>

            {/* {edit && 
            <Room>
                <img src={amendUser.src} alt={`img/${amendUser.id}`} />
                <h3>ID {amendUser.id}</h3>
            </Room>
            } */}

            <form onSubmit={(e) => 
            {e.preventDefault();
            handleSubmit();
            e.target.reset();
            navigate('/rooms')}}>
                <Label>Room Name - Number</Label>
                <Input type="text" name='name' value={currentRoom.name} onChange={handleInput}/>

                <Label>Room Type</Label>
                <Select name='type' value={currentRoom.type} onChange={handleInput}>
                    <option disabled>Select</option>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Double Superior">Double Superior</option>
                    <option value="Suite">Suite</option>
                </Select>

                <Label>Price</Label>
                <Input type="number" name='price' value={currentRoom.price} onChange={handleInput}/>

                <Label>Discount to apply</Label>
                <Input type="number" name='discount' onChange={handleInput}/>

                <Text>Status</Text>
                <StateBox>
                    <Check>
                        <input 
                        name='status' 
                        type="radio" 
                        value={'Available'}
                        checked={currentRoom.status === "Available"}  
                        onChange={handleInput}/>
                        <label>Available</label>
                    </Check>

                    <Check>
                        <input 
                        name='status' 
                        type="radio" 
                        value={'Booked'}
                        checked={currentRoom.status === "Booked"} 
                        onChange={handleInput}/>
                        <label>Booked</label>
                    </Check>
                </StateBox>
                
                <Text>Amenities</Text>
                <StateBox>
                    <div>  
                        <div>            
                            <label><MdOutlineAir />Air conditioner</label>
                            <input name='amenities' type="checkbox" value={'Air conditioner'} onChange={handleInput} 
                            
                            />
                        </div>

                        <div>
                            <label><FaShower />Shower</label>
                            <input name='amenities' type="checkbox" value={'Shower'} onChange={handleInput}/>
                        </div>

                        <div>
                            <label><GiTowel />Towels</label>
                            <input name='amenities' type="checkbox" value={'Towels'} onChange={handleInput}/>
                        </div>

                        <div>
                            <label><MdSystemSecurityUpdateGood />Smart Locker</label>
                            <input name='amenities' type="checkbox" value={'Smart Locker'} onChange={handleInput}/>
                        </div>
                    </div>

                    <div>  
                        <div>
                            <label><BiCheckShield />24 Hours Guard</label>
                            <input name='amenities' type="checkbox" value={'24 Hours Guard'} onChange={handleInput}/>
                        </div>

                        <div>
                            <label><BiWifi />Free Wifi</label>
                            <input name='amenities' type="checkbox" value={'Free Wifi'} onChange={handleInput}/>
                        </div>

                        <div>
                            <label><RiComputerFill />Television</label>
                            <input name='amenities' type="checkbox" value={'Television'} onChange={handleInput}/>
                        </div>

                        <div>
                            <label><TbHotelService />Room Services</label>
                            <input name='amenities' type="checkbox" value={'Room Services'} onChange={handleInput}/>
                        </div>
                    </div>
                </StateBox>

                <FileBox>
                    <label>Upload Image <IoImagesOutline /></label>
                    <input type="file" name='src' />
                </FileBox>

                <BtnBox>
                    <button type='submit'>Save</button>
                    <button onClick={(e) => { e.preventDefault(); navigate('/rooms')}}>Cancel</button>
                </BtnBox>
            </form>
        </FormBox>
    );
}