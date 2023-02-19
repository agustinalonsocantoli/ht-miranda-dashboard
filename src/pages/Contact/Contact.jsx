import { Msg } from "../../components/Msg/Msg";
import { Table } from "../../components/Table/Table";
import { dataReview } from '../../data/DataReview';
import { ContactContent, Review, Date, Customer, Comment, Button, Options, Filters } from './ContactStyled';

export const Contact = () => {

    const archive = (id) => {
        console.log(`Archived ${id}`);
    }

    const cols = [
        { property: ['date', 'id'], label: 'Date', display: (row) => (
            <Date>
                <p>{row.date}</p>
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
        { label: 'Action', display: (row) => (<Button onClick={() => archive(row.id)}>Archive</Button>)}
    ];

    return(
        <ContactContent>

            <Review>
                <Msg />
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

            <Table data={dataReview} cols={cols} />
        </ContactContent>
    );
}