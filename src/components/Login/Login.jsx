import { useNavigate } from "react-router-dom";
import { LoginComponent, BoxContent, Input, Button, BoxLogo, Logo, H, M, Label, Form } from "./LoginStyled";

export const Login = (props) => {

    const navigate = useNavigate();

    const user = {
        username: 'agustin@hotelmiranda.com',
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
                    </div>
                </BoxLogo>

                <Form onSubmit={handleSubmit}>
                    <Label>User</Label>
                    <Input type="text" name="username" />
                    <Label>Password</Label>
                    <Input type="password" name="password" />
                    <Button type="submit">Login</Button>
                </Form>
            </BoxContent>
        </LoginComponent>
    );
}