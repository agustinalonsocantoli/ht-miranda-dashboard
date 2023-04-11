// React
import React from "react";
import { useState } from "react";
// Components
import { Msg } from "../../components/Msg/Msg";
// Icons
import { IoBedOutline } from "react-icons/io5";
import { BsCalendar2Check } from "react-icons/bs";
import { TbLogin } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
// Styled
import { DashboardContent, IconIn, Box, InfoBox, ReviewsBox, Review, Next, Prev } from './DashboardStyled';

export const Dashboard = () => {
    const [ translate, setTraslate ] = useState(0)

    return(
        <DashboardContent>
            <InfoBox>
                <Box>
                    <IoBedOutline />

                    <div>
                        <p>8,461</p>
                        <p>New Booking</p>
                    </div>
                </Box>

                <Box>
                    <BsCalendar2Check />

                    <div>
                        <p>963</p>
                        <p>Scheduled Room</p>
                    </div>
                </Box>

                <Box>
                    <IconIn><TbLogin /></IconIn>

                    <div>
                        <p>753</p>
                        <p>Check In</p>
                    </div>
                </Box>

                <Box>
                    <TbLogin />

                    <div>
                        <p>516</p>
                        <p>Check Out</p>
                    </div>
                </Box>
            </InfoBox>

            <ReviewsBox>
                <Review>
                    <h1>Latest Review by Customers</h1>

                    <Msg translate={translate} popup={false} filter={10}/>

                    <Next onClick={() => setTraslate(prev => prev + 300)}>
                        <IoIosArrowRoundForward />
                    </Next>

                    {translate > 0 && 
                        <Prev onClick={() => setTraslate(prev => prev - 300)}>
                            <IoIosArrowRoundBack />
                        </Prev>
                    }
                </Review>
            </ReviewsBox>
        </DashboardContent>
    );
}