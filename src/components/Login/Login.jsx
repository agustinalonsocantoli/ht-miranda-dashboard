import { useNavigate } from "react-router-dom";
import { LoginComponent, BoxContent, Input, Button, BoxLogo, Logo, H, M, Label, Form, IconConteiner, Icon, P } from "./LoginStyled";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";

export const Login = (props) => {

    const navigate = useNavigate();

    const user = {
        username: 'agustin@hm.com',
        password: '000000',
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        if(username === user.username && password === user.password) {
            props.setAuthenticated(true);
            navigate('/')
            localStorage.setItem('login', JSON.stringify(user));
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
                    <Input type="text" name="username" defaultValue={user.username}/>
                    </IconConteiner>
                    <Label>Password</Label>
                    <IconConteiner>
                    <Icon><RiLockPasswordFill /></Icon>
                    <Input type="password" name="password" defaultValue={user.password}/>
                    </IconConteiner>
                    <Button type="submit"><SlLogin />Login</Button>
                </Form>
            </BoxContent>
        </LoginComponent>
    );
}