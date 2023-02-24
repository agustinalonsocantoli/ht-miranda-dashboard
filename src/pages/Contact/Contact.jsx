// React
import { useEffect, useState } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getReviews, getReview, editReview } from "../../features/contactSlice";
// Components
import { Msg } from "../../components/Msg/Msg";
import { Table } from "../../components/Table/Table";
// Styled
import { ContactContent, Review, Date, Customer, Comment, Button, Options, Filters } from './ContactStyled';
import { formatDate } from "../../export/functions";

export const Contact = () => {
    const { reviews } = useSelector(state => state.reviewsReducer);
    const { review } = useSelector(state => state.reviewsReducer);
    const dispatch = useDispatch();

    const [ reviewsList , setReviewsList ] = useState([]);
    const [ archived , setArchived ] = useState(true);

    useEffect(() => {
        if(reviews.length === 0){
            dispatch(getReviews());
        }

    }, [dispatch, reviews])

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

        const reviewFilter = reviewOrderBy.filter(review => review.archived !== archived)

        setReviewsList(reviewFilter)
        
    }, [reviews, archived])

    const handleClick = (id, value) => {
        dispatch(getReview(id))
        dispatch(editReview({
            ...review,
            archived: value
        }))
    }

    const cols = [
        { property: ['date', 'id'], label: 'Date', display: (row) => (
            <Date>
                <p>{formatDate(row.date)}</p>
                <p>ID # {row.id}</p>
            </Date>) 
        },
        { property: ['customer', 'email', 'phone'], label: 'Customer', display: (row) => (
            <Customer>
                <p>{row.customer}</p>
                <p>{row.email}</p>
                <p>{row.phone}</p>
            </Customer>) 
        },
        { property: ['affair', 'comment'], label: 'Comment', display: (row) => (
            <Comment>
                <p>{row.affair}</p>
                <p>{row.comment}</p>
            </Comment>) 
        },
        { label: 'Action', display: (row) => (
            <Button archived={archived} onClick={() => handleClick(row.id, archived)}>
                {archived ? 'Archive' : 'Unarchive'}
            </Button>) 
        }
    ];

    return(
        <ContactContent>
            <Review>
                <Msg filter={3} translate={0}/>
            </Review>

            <Options>
                <Filters>
                    <p onClick={() => setArchived(true)}>All Contacts</p>
                    <p onClick={() => setArchived(false)}>Archived</p>
                </Filters>

                <select defaultValue={'date'}>
                    <option value="date">Date</option>
                </select>
            </Options>

            <Table data={reviewsList} cols={cols} />
        </ContactContent>
    );
}