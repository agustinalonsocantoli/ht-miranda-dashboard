import styled from "styled-components";

export const LoginComponent = styled.div`
    background-color: #FFFFFF;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);    
    padding: 5% 7%;
    background-color: #FFFFFF;
`;

export const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Logo = styled.div`
    font-family: 'Poppins', sans-serif;;
    font-weight: 400;
    font-size: 40px;
    padding: 0px 20px;
    background: #FFFFFF;
    box-shadow: 0px 14px 24px rgba(139, 139, 139, 0.25);
    color: #262626;
`;

export const H = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 26px;
    text-transform: uppercase;
    color: #262626;
`;

export const M = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 400;
    text-transform: uppercase;
    color: #262626;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    min-width: 300px;
`;

export const Input = styled.input`
    background: #EBEBEB;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding-top: 3px;
    width: 100%;
    min-height: 30px;
    color: #262626;
`;

export const Label = styled.label`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #262626;
`;

export const Button = styled.button`
    background: #EBF1EF;
    border-radius: 8px;
    border: none;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    width: 50%;
    margin-left: auto;
    margin-top: 10px;
    color: #262626;
`;
