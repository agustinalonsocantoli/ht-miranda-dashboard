import { useNavigate } from "react-router-dom";
import { LoginComponent, BoxContent, Input, Button, BoxLogo, Logo, H, M, Label, Form, IconConteiner, Icon, P } from "./LoginStyled";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";
import { useState } from "react";

export const Login = (props) => {
    const navigate = useNavigate();
    const [ userName, setUserName ] = useState('agustin@hm.com');
    const [ userPassword, setUserPassword ] = useState('000000');

    const user = {
        username: 'agustin@hm.com',
        password: '000000',
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(userName === user.username && userPassword === user.password) {
            props.setAuthenticated(true);
            navigate('/')
            localStorage.setItem('login', JSON.stringify(user.username));
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
                    <Input type="text" name="username" defaultValue={userName} onChange={({ target }) => setUserName(target.value)}/>
                    </IconConteiner>
                    <Label>Password</Label>
                    <IconConteiner>
                    <Icon><RiLockPasswordFill /></Icon>
                    <Input type="password" name="password" defaultValue={userPassword} onChange={({ target }) => setUserPassword(target.value)}/>
                    </IconConteiner>
                    <Button type="submit"><SlLogin />Login</Button>
                </Form>
            </BoxContent>
        </LoginComponent>
    );
}