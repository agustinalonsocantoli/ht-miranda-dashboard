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
    width: 100%;
    min-height: 30px;
    color: #262626;
    outline: none;
    padding: 5px 0 5px 27px;
`;

export const Label = styled.label`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #262626;
`;

export const Button = styled.button`
    background: #EBEBEB;
    border-radius: 8px;
    border: none;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    width: 50%;
    margin-left: auto;
    margin-top: 10px;
    color: #262626;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    border: 2px solid #EBEBEB;
    transition: all 1s ease;
    box-shadow: 6px 6px 12px #CCCCCC,
                -6px -6px 12px #FFFFFF;
    
    &:active {
        box-shadow: inset 4px 4px 12px #FFFFFF,
                    inset -4px -4px 12px #CCCCCC;
    }
`;

export const IconConteiner = styled.div`
    position: relative;
`;

export const Icon = styled.div`
    position: absolute;
    top: 6px;
    left: 7px;
`;

export const P = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    color: #5D5449;
    font-size: 12px;
`;
