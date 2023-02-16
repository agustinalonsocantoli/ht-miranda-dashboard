import imgSlider from '../../assets/img/room.png'
import { BsTelephoneFill } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { BiCheckShield } from "react-icons/bi";
import { IoWifi } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { dataBookings } from '../../data/DataBookings';
import { BoxBookings, 
        ImgSlider, 
        ImgUser,
        ImgText, 
        DataUser, 
        DataCheck, 
        User, 
        BtnPhone, 
        BtnMsg, 
        Icon, 
        DataRooms, 
        Rooms, 
        Text,
        Facilities,
        Status
    } 
from './BDetailsStyled';


export const BookDetails = () => {

    const { id } = useParams()
    const bookSelect = dataBookings.find(book => book.id === id);

    return(
        <BoxBookings>
            <div>
                <div>
                    <DataUser>
                        <ImgUser>
                            <img src={bookSelect.src} alt={`img/${bookSelect.name}`} />
                        </ImgUser>

                        <User>
                            <h3>{bookSelect.name}</h3>
                            <h4>{`ID ${bookSelect.id}`}</h4>

                            <div>
                                <BtnPhone><BsTelephoneFill/></BtnPhone>
                                <BtnMsg><BsChatTextFill /> Send Message</BtnMsg>
                            </div>
                        </User>

                        <Icon><BsThreeDotsVertical /></Icon>
                    </DataUser>

                    <DataCheck>
                        <div>
                            <h5>Check In</h5>
                            <p>{`${bookSelect.checkinDate} | ${bookSelect.checkinTime}`}</p>
                        </div>

                        <div>
                            <h5>Check Out</h5>
                            <p>{bookSelect.checkoutDate}</p>
                        </div>
                    </DataCheck>
                </div>

                <DataRooms>
                    <Rooms>
                        <h5>Room Info</h5>
                        <p>{bookSelect.type}</p>
                    </Rooms>
                    <Rooms>
                        <h5>Room Info</h5>
                        <p>$145<span>/night</span></p>
                    </Rooms>
                </DataRooms>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum
                </Text>

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

                <Status status={bookSelect.status}>
                    <p>{bookSelect.status}</p>
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