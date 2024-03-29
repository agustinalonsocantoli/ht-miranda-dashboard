// React
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Redux
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { getReviews } from "../../features/contactSlice";
// Components
import { Msg } from "../../components/Msg/Msg";
import { Table } from "../../components/Table/Table";
// Styled
import { ContactContent, Review, Date, Customer, Comment, Button, Options, Filters } from './ContactStyled';
import { FormDate } from "../../export/functions";

export const Contact = () => {
    const { reviews, statusData } = useAppSelector(state => state.reviewsReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [ reviewsList , setReviewsList ] = useState([]);
    const archived: boolean = true;

    useEffect(() => {
        if(statusData === "idle"){
            dispatch(getReviews())

        }


    }, [dispatch, statusData, reviews])

    useEffect(() => {
        const reviewOrderBy = [...reviews];

        reviewOrderBy.sort((a, b) => {
            if(a['date'] > b['date']) {
                return 1
            } else if (a['date'] < b['date']) {
                return -1
            }
            return 0
        });

        setReviewsList(reviewOrderBy)

    }, [reviews])

    const cols = [
        { property: ['date', 'id'], label: 'Date', display: (row: any) => (
            <Date>
                <p>{FormDate(row.date)}</p>
                <p>ID # {row._id}</p>
            </Date>) 
        },
        { property: ['customer', 'email', 'phone'], label: 'Customer', display: (row: any) => (
            <Customer>
                <p>{row.customer}</p>
                <p>{row.email}</p>
                <p>{row.phone}</p>
            </Customer>) 
        },
        { property: ['affair', 'comment'], label: 'Comment', display: (row: any) => (
            <Comment>
                <p>{row.affair}</p>
                <p>{row.comment}</p>
            </Comment>) 
        },
        { label: 'Action', display: (row: any) => (
            <Button archived={archived} onClick={() => navigate(`/contact/${row._id}`)}>
                {archived ? 'Archive' : 'Unarchive'}
            </Button>) 
        }
    ];

    return(
        <ContactContent>
            <Review>
                <Msg filter={3} translate={0} popup={true}/>
            </Review>

            <Options>
                <Filters>
                    <p>All Contacts</p>
                    <p>Archived</p>
                </Filters>

                <select defaultValue={'date'}>
                    <option value="date">Date</option>
                </select>
            </Options>

            <Table data={reviewsList} cols={cols} actions={null}/>
        </ContactContent>
    );
}