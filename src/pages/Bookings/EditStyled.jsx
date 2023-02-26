import styled from "styled-components";

export const EditBox = styled.div`
    position: absolute;
    background: #FFFFFF;
    border-radius: 10px;
    min-width: 300px;
    margin: .3% 40%;
    padding: 2%;
    z-index: 199;

    h1 {
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 25px;
        color: #292929;
        margin-bottom: 30px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 15px;
            color: #262626;
            margin-bottom: 5px;
        }

        input {
            background: #EBEBEB;
            border: none;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            min-height: 30px;
            color: #262626;
            outline: none;
            padding: 5px;
            margin-bottom: 15px;
            font-size: 13px;
        }

        select {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            color: #135846;
            border: none;
            outline: none;
            border-bottom: 2px solid #EBF1EF;
            padding: 5px;
            text-align: center;
            margin-bottom: 15px;
            font-size: 13px;
            cursor: pointer;
        }
    }
`;

export const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    button {
        background: #EBF1EF;
        border-radius: 8px;
        border: none;
        color: #135846;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 15px;
        padding: 10px 20px;
        cursor: pointer;

        &:active {
            transform: scale(0.9);
            transition: all 100ms ease-in-out;
        }
    }
`;