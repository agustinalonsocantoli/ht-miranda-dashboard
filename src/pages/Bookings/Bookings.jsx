import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import imgSlider from '../../assets/img/imgSlider.png'
import imgName from '../../assets/img/imgName.png'
import { BsTelephoneFill } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { BiCheckShield } from "react-icons/bi";
import { IoWifi } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BoxBookings, ImgSlider, ImgUser, DataUser, DataCheck } from './BookingsStyled';


export const Bookings = ({ setTitle }) => {
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
    })

    return(
        <BoxBookings>
            <div>
                <div>
                    <DataUser>
                        <ImgUser>
                            <img src={imgName} alt="img/user" />
                        </ImgUser>

                        <div>
                            <h3>Roberto Mansini</h3>
                            <h4>ID 1234124512551</h4>
                            <button><BsTelephoneFill/></button>
                            <button><BsChatTextFill />Send Message</button>
                        </div>

                        <BsThreeDotsVertical />
                    </DataUser>

                    <DataCheck>
                        <div>
                            <h5>Check In</h5>
                            <p>October 30th, 2020</p>
                        </div>

                        <div>
                            <h5>Check Out</h5>
                            <p>November 2th, 2020</p>
                        </div>
                    </DataCheck>
                </div>

                <div>
                    <div>
                        <h5>Room Info</h5>
                        <p>Deluxe Z - 002424</p>
                    </div>
                    <div>
                        <h5>Room Info</h5>
                        <p>$145<span>/night</span></p>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum
                </p>

                <div>
                    <h5>Facilities</h5>
                    <span><IoBedOutline/>3 Bed Space</span>
                    <span><BiCheckShield/>24 Hours Guard</span>
                    <span><IoWifi/>Free Wifi</span>
                    <span>2 Bathroom</span>
                    <span>Air Conditioner</span>
                    <span>Television</span>
                </div>

            </div>

            <ImgSlider>
                <img 
                src={imgSlider} 
                alt="img/slider" />
            </ImgSlider>
        </BoxBookings>
    );
}