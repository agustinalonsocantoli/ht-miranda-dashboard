import { dataUsers } from '../../data/DataUsers'
import { useParams } from 'react-router-dom';
import { FormUser } from '../../components/FormUser/FormUser';
import { ContentBox } from './GeneralStyled'

export const EditUser = () => {

    const { id } = useParams();
    const editUser = dataUsers.find(book => book.id === id);

    return(
        <ContentBox>
            <FormUser typeForm={'Edit Employee Data'} edit={true} editUser={editUser}/>
        </ContentBox>
    );
}