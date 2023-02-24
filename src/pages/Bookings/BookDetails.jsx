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
import CircularProgress from '@mui/material/CircularProgress';
import { BoxBookings, ImgSlider, ImgUser,ImgText, DataUser, DataCheck, User, BtnPhone, BtnMsg, Icon, DataRooms, Rooms, Text, Facilities, Status, BtnOptions, Actions, Loading } from './DetailsStyled';


export const BookDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { book } = useSelector(state => state.bookingsReducer);
    const [ viewActions, setViewActions ] = useState(false);
    const [ currentBook, setCurrentBook ] = useState({})

    useEffect(() => {
        dispatch(getBook(id));

        setCurrentBook(book)
    }, [dispatch, id, book])

    const removeBook = (id) => {
        dispatch(deleteBook(id));
        navigate('/bookings')
    }

    if(Object.keys(currentBook).length === 0) {
        return(
            <Loading>
                <CircularProgress color="error" size={200} />
            </Loading>
        );
    }

    return(
        <BoxBookings>
            <div>
                <div>
                    <DataUser>
                        <ImgUser>
                            <img src={currentBook.src} alt={`img/${currentBook.name}`} />
                        </ImgUser>

                        <User>
                            <h3>{currentBook.name}</h3>
                            <h4>{`ID ${currentBook.id}`}</h4>

                            <div>
                                <BtnPhone><BsTelephoneFill/></BtnPhone>
                                <BtnMsg><BsChatTextFill /> Send Message</BtnMsg>
                            </div>
                        </User>

                        <BtnOptions>
                            <Icon><BsThreeDotsVertical onClick={() => setViewActions(prev => !prev)}/></Icon>

                            <Actions actions={viewActions}>
                                <p onClick={() => removeBook(currentBook.id)}><MdOutlineDeleteForever />Delete</p>
                                <p><TiEdit />Edit</p>
                            </Actions>
                        </BtnOptions>
                    </DataUser>

                    <DataCheck>
                        <div>
                            <h5>Check In</h5>
                            <p>{`${currentBook.checkinDate} | ${currentBook.checkinTime}`}</p>
                        </div>

                        <div>
                            <h5>Check Out</h5>
                            <p>{currentBook.checkoutDate}</p>
                        </div>
                    </DataCheck>
                </div>

                <DataRooms>
                    <Rooms>
                        <h5>Room Info</h5>
                        <p>{currentBook.type}</p>
                    </Rooms>
                    <Rooms>
                        <h5>Room Info</h5>
                        <p>$145<span>/night</span></p>
                    </Rooms>
                </DataRooms>

                <Text>{currentBook.note}</Text>

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

                <Status status={currentBook.status}>
                    <p>{currentBook.status}</p>
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