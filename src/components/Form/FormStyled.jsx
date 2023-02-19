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
    }

    select {
        display: block;
    }
`;

export const Close = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 25px;
    color: #E23428;

    svg:active {
        transform: scale(0.8);
        transition: all 100ms ease-in-out;
    }
`;

export const Label = styled.label`
    display: block;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #262626;
`;

export const Text = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #262626;
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
`;

export const Date = styled.input`
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
`;

export const FileBox = styled.div`
    display: inline-block;
    background: #EBF1EF;
    border-radius: 8px;
    padding: 10px 45px;
    position: relative;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease-in-out;
    }

    label {
        color: #135846;
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

    label {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #E23428;
    }

    label:nth-child(2) {
        color: #5AD07A;
    }
`;

export const Select = styled.select`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #135846;
    border: none;
    outline: none;
    border-bottom: 2px solid #EBF1EF;
    width: 50%;
    padding: 5px;
    text-align: center;
`;