import styled from "styled-components";

export const FormBox = styled.div`
    background: #FFFFFF;
    border-radius: 12px;
    padding: 30px;
    position: relative;

    h1 {
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 25px;
        color: #292929;
        margin-bottom: 30px;
        text-align: center;
    }

    textarea {
        resize: none;
        display: block;
        background: #EBEBEB;
        border: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        width: 50%;
        min-height: 100px;
        color: #262626;
        outline: none;
        padding: 5px;
        margin: auto;
        margin-bottom: 15px;
        font-size: 13px;
    }
`;

export const Label = styled.label`
    display: block;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #262626;
    width: 50%;
    margin: auto;
    margin-bottom: 5px;
`;

export const Text = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #262626;
    width: 50%;
    margin: auto;
    font-size: 15px;
`;

export const Input = styled.input`
    display: block;
    background: #EBEBEB;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    width: 50%;
    min-height: 30px;
    color: #262626;
    outline: none;
    padding: 5px;
    margin: auto;
    margin-bottom: 15px;
    font-size: 13px;
`;

export const Date = styled.input`
    display: block;
    margin: auto;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #135846;
    border: none;
    outline: none;
    border-bottom: 2px solid #EBF1EF;
    width: 50%;
    min-height: 30px;
    padding: 5px;
    text-align: center;
    margin-bottom: 15px;
    font-size: 13px;
`;

export const FileBox = styled.div`
    background: #EBF1EF;
    border-radius: 8px;
    padding: 10px;
    position: relative;
    text-align: center;
    width: 25%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 15px;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease-in-out;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #135846;
        font-size: 15px;
    }

    input {
        position:absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
        width:100%;
        height:100%;
        opacity: 0;
    }
`;

export const StateBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    margin-bottom: 15px;

    label {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #E23428;
        font-size: 15px;
    }

    label:nth-child(2) {
        color: #5AD07A;
        margin-right: 10%;
    }
`;

export const Select = styled.select`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #135846;
    border: none;
    outline: none;
    border-bottom: 2px solid #EBF1EF;
    display: block;
    margin: auto;
    width: 50%;
    padding: 5px;
    text-align: center;
    margin-bottom: 15px;
    font-size: 13px;
`;

export const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    button {
        display: block;
        width: 20%;
        background: #EBF1EF;
        border-radius: 8px;
        border: none;
        color: #135846;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 15px;
        padding: 10px;

        &:active {
            transform: scale(0.9);
            transition: all 100ms ease-in-out;
        }
    }
`;

export const User = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
        object-fit: cover;
        width: 75px;
        height: 75px;
        border-radius: 12px;
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 14px;
        color: #799283;
    }   
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15%;
`;