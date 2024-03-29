// React
import React from 'react';
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
import { FormBox, Label, Input, LabelImg, Text, StateBox, Select, BtnBox, Check, Room, Loading } from './FormStyled'
// Mui
import CircularProgress from '@mui/material/CircularProgress';


export const FormRoom = ({ typeForm, edit, handleSubmit, handleInput, currentRoom}) => {
    const navigate = useNavigate();

    const cancelForm = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/rooms')
    }

    if(currentRoom === null || currentRoom === undefined){
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
            <Room>
                <img src={currentRoom.src} alt={`img/${currentRoom._id}`} />
                <h3>ID {currentRoom._id}</h3>
            </Room>
            }

            <form onSubmit={handleSubmit}>
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
                <Input type="number" name='offer' onChange={handleInput}
                value={currentRoom.offer} 
                />

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
                            checked={currentRoom.amenities && currentRoom.amenities.find ((item: string) => item === 'Air conditioner')}
                            />
                        </div>

                        <div>
                            <label><FaShower />Shower</label>
                            <input name='amenities' type="checkbox" value={'Shower'} onChange={handleInput}
                            checked={currentRoom.amenities && currentRoom.amenities.find ((item: string) => item === 'Shower')}
                            />
                        </div>

                        <div>
                            <label><GiTowel />Towels</label>
                            <input name='amenities' type="checkbox" value={'Towels'} onChange={handleInput}
                            checked={currentRoom.amenities && currentRoom.amenities.find ((item: string) => item === 'Towels')}
                            />
                        </div>

                        <div>
                            <label><MdSystemSecurityUpdateGood />Smart Locker</label>
                            <input name='amenities' type="checkbox" value={'Smart Locker'} onChange={handleInput}
                            checked={currentRoom.amenities && currentRoom.amenities.find ((item: string) => item === 'Smart Locker')}
                            />
                        </div>
                    </div>

                    <div>  
                        <div>
                            <label><BiCheckShield />24 Hours Guard</label>
                            <input name='amenities' type="checkbox" value={'24 Hours Guard'} onChange={handleInput}
                            checked={currentRoom.amenities && currentRoom.amenities.find ((item: string) => item === '24 Hours Guard')}
                            />
                        </div>

                        <div>
                            <label><BiWifi />Free Wifi</label>
                            <input name='amenities' type="checkbox" value={'Free Wifi'} onChange={handleInput}
                            checked={currentRoom.amenities && currentRoom.amenities.find ((item: string) => item === 'Free Wifi')}
                            />
                        </div>

                        <div>
                            <label><RiComputerFill />Television</label>
                            <input name='amenities' type="checkbox" value={'Television'} onChange={handleInput}
                            checked={currentRoom.amenities && currentRoom.amenities.find ((item: string) => item === 'Television')}
                            />
                        </div>

                        <div>
                            <label><TbHotelService />Room Services</label>
                            <input name='amenities' type="checkbox" value={'Room Services'} onChange={handleInput}
                            checked={currentRoom.amenities && currentRoom.amenities.find ((item: string) => item === 'Room Services')}
                            />
                        </div>
                    </div>
                </StateBox>

                <LabelImg>URL Image <IoImagesOutline /></LabelImg>
                <textarea name='src' value={currentRoom.src} onChange={handleInput}></textarea>

                <BtnBox>
                    <button type='submit'>Save</button>
                    <button onClick={cancelForm}>Cancel</button>
                </BtnBox>
            </form>
        </FormBox>
    );
}