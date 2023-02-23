// React
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getBook, deleteBook } from '../../features/bookingsSlice';
// Icons
import { BsTelephoneFill } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { BiCheckShield } from "react-icons/bi";
import { IoWifi } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
// Image
import imgSlider from '../../assets/img/room.png'
// Styled
import { BoxBookings, ImgSlider, ImgUser,ImgText, DataUser, DataCheck, User, BtnPhone, BtnMsg, Icon, DataRooms, Rooms, Text, Facilities, Status, BtnOptions, Actions } from './DetailsStyled';


export const BookDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { book } = useSelector(state => state.bookingsReducer);
    const [ viewActions, setViewActions ] = useState(false);

    useEffect(() => {
        dispatch(getBook(id));

    }, [dispatch, id])

    const removeBook = (id) => {
        dispatch(deleteBook(id));
        navigate('/bookings')
    }


    return(
        <BoxBookings>
            <div>
                <div>
                    <DataUser>
                        <ImgUser>
                            <img src={book.src} alt={`img/${book.name}`} />
                        </ImgUser>

                        <User>
                            <h3>{book.name}</h3>
                            <h4>{`ID ${book.id}`}</h4>

                            <div>
                                <BtnPhone><BsTelephoneFill/></BtnPhone>
                                <BtnMsg><BsChatTextFill /> Send Message</BtnMsg>
                            </div>
                        </User>

                        <BtnOptions>
                            <Icon><BsThreeDotsVertical onClick={() => setViewActions(prev => !prev)}/></Icon>

                            <Actions actions={viewActions}>
                                <p onClick={() => removeBook(book.id)}><MdOutlineDeleteForever />Delete</p>
                                <p><TiEdit />Edit</p>
                            </Actions>
                        </BtnOptions>
                    </DataUser>

                    <DataCheck>
                        <div>
                            <h5>Check In</h5>
                            <p>{`${book.checkinDate} | ${book.checkinTime}`}</p>
                        </div>

                        <div>
                            <h5>Check Out</h5>
                            <p>{book.checkoutDate}</p>
                        </div>
                    </DataCheck>
                </div>

                <DataRooms>
                    <Rooms>
                        <h5>Room Info</h5>
                        <p>{book.type}</p>
                    </Rooms>
                    <Rooms>
                        <h5>Room Info</h5>
                        <p>$145<span>/night</span></p>
                    </Rooms>
                </DataRooms>

                <Text>{book.note}</Text>

                <Facilities>
                    <h5>Facilities</h5>

                    <div>
                        <span><IoBedOutline/>3 Bed Space</span>
                        <span><BiCheckShield/>24 Hours Guard</span>
                        <span><IoWifi/>Free Wifi</span>
                    </div>

                    <div>
                        <span>2 Bathroom</span>
                        <span>Air Conditioner</span>
                        <span>Television</span>
                    </div>
                </Facilities>

            </div>

            <ImgSlider>
                <img 
                src={imgSlider} 
                alt="img/slider" />

                <Status status={book.status}>
                    <p>{book.status}</p>
                </Status>

                <ImgText>
                    <h4>Bed Room</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exerci
                    </p>
                </ImgText>
            </ImgSlider>
        </BoxBookings>
    );
}