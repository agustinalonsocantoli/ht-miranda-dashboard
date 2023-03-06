// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Custom Hook
import { useAuthContex } from "../../App";
// Icons
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";
//  Styled
import { LoginComponent, BoxContent, Input, Button, BoxLogo, Logo, H, M, Label, Form, IconConteiner, Icon, P } from "./LoginStyled";

export const Login = () => {
    const navigate = useNavigate();
    const { username, password, dispatch } = useAuthContex();
    
    const [ usernameFrom, setUsernameFrom ] = useState('agustin@hm.com');
    const [ passwordFrom, setPasswordFrom ] = useState('000000');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(usernameFrom === username && passwordFrom === password) {
            dispatch({
                type: 'LOG_IN',
                payload: true,
            });

            navigate('/')
            localStorage.setItem('login', JSON.stringify(username));
        } else {
            alert('Usuario Incorrecto')
            e.target.reset()
        }
    }

    return(
        <LoginComponent>
            <BoxContent>
                <BoxLogo>
                    <Logo>
                        <h1>H</h1>
                    </Logo>

                    <div>
                        <H>Hotel</H>
                        <M>Miranda</M>
                        <P>Hotel Admin Dashboard</P>
                    </div>
                </BoxLogo>

                <Form onSubmit={handleSubmit}>
                    <Label>User</Label>
                    <IconConteiner>
                    <Icon><FaUserCircle /></Icon>
                    <Input data-cy="username" type="text" name="username" defaultValue={username} onChange={({ target }) => setUsernameFrom(target.value)}/>
                    </IconConteiner>
                    <Label>Password</Label>
                    <IconConteiner>
                    <Icon><RiLockPasswordFill /></Icon>
                    <Input data-cy="password" type="password" name="password" defaultValue={password} onChange={({ target }) => setPasswordFrom(target.value)}/>
                    </IconConteiner>
                    <Button data-cy="btn" type="submit"><SlLogin />Login</Button>
                </Form>
            </BoxContent>
        </LoginComponent>
    );
}
