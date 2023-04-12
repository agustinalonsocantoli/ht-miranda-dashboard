// React
import React from "react";
import { useState, useEffect } from "react";
// Redux
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { getReviews } from '../../features/contactSlice';
// Icons
import { RxCrossCircled } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";
// Image
import reviewImages from '../../assets/img/user5.png';
// Styled
import { MsgBox, MsgContent, Check, Close, UserInfo, PopupBox } from './MsgStyled';
// Ext
import { truncate } from "lodash";
import { Reviews } from "../../interfaces/ContactInt";


export const Msg = ({ filter, translate, popup }) => {
    const dispatch = useAppDispatch();
    const { reviews } = useAppSelector(state => state.reviewsReducer);
    const [ messages, SetMessages ] = useState([]);
    const [ popupData, setPopupData ] = useState(null);
    const [ openPopup, setOpenPopup ] = useState(false);

    useEffect(() => {
        dispatch(getReviews())

        SetMessages(reviews)
    }, [dispatch, reviews])

    const handleClick = (message: Reviews) => {
        setPopupData(message);
        setOpenPopup(true);
    }

    return(
        <MsgBox translate={translate} max={(messages?.length * 350) - (350 * 3)}>
            {messages?.slice(0, filter).map(item => (
                <MsgContent key={item._id} onClick={() => handleClick({...item})}>
                    <p>{truncate(item.comment, {length: 82})}</p>

                    <UserInfo>
                        <img src={reviewImages} alt="img/name" />

                        <div>
                            <h4>{item.customer}</h4>
                            <h5>{item.email}</h5>
                            <h5>{item.phone}</h5>
                        </div>
                    </UserInfo>

                    <Check>
                        <RxCheckCircled /> 
                    </Check>
                </MsgContent>
            ))}

            {popup && openPopup &&
            <PopupBox>
                <h3>Affair: <span>{popupData.affair}</span></h3>
                <h3>Comment:</h3>
                <p>{popupData.comment}</p>
                <h3>Date: <span>{popupData.date}</span></h3>
                <h3>Customer: <span>{popupData.customer}</span></h3>
                <h3>Contact:</h3>
                <p>Email: <span>{popupData.email}</span></p>
                <p>Phone: <span>{popupData.phone}</span></p>

                <Close onClick={() => setOpenPopup(false)}>
                    <RxCrossCircled /> 
                </Close>
            </PopupBox>
            }

        </MsgBox>
    );
}