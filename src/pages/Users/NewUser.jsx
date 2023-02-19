import { FormUser } from '../../components/FormUser/FormUser';
import { ContentBox } from './GeneralStyled'

export const NewUser = () => {
    return(
        <ContentBox>
            <FormUser typeForm={'Register New Employee'}/>
        </ContentBox>
    );
}