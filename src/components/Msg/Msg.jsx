// React
import { useState, useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from '../../features/contactSlice';
// Icons
import { RxCrossCircled } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";
// Image
import reviewImages from '../../assets/img/user5.png'
// Styled
import { MsgBox, MsgContent, Icons, UserInfo } from './MsgStyled';


export const Msg = ({ filter, translate }) => {
    const dispatch = useDispatch();
    const { reviews } = useSelector(state => state.reviewsReducer);
    const [ messages, SetMessages ] = useState([]);

    useEffect(() => {
        dispatch(getReviews())

        SetMessages(reviews)
    }, [dispatch, reviews])


    return(
        <MsgBox translate={translate} max={(messages.length * 350) - (350 * 3)}>
            {messages.slice(0, filter).map(item => (
                <MsgContent key={item.id}>
                    <p>{item.comment}</p>

                    <UserInfo>
                        <img src={reviewImages} alt="img/name" />

                        <div>
                            <h4>{item.customer}</h4>
                            <h5>{item.email}</h5>
                            <h5>{item.phone}</h5>
                        </div>
                    </UserInfo>

                    <Icons>
                        <RxCheckCircled />
                        <RxCrossCircled /> 
                    </Icons>
                </MsgContent>
            ))}
        </MsgBox>
    );
}