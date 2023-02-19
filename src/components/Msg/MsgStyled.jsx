import styled from "styled-components";

export const MsgBox = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`;

export const MsgContent = styled.div`
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 20px;
    padding: 20px 25px;
    position: relative;

    &:hover {
        box-shadow: 0px 16px 30px #00000014;
    }

    p {
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 14px;
        color: #4E4E4E;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 40px;

    img {
        object-fit: cover;
        width: 50px;
        height: 50px;
        border-radius: 8px;
    }

    h4 {
        font-family: 'Poppins', sans-serif;;
        font-weight: 600;
        font-size: 14px;
        color: #262626;
    }

    h5 {
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 12px;
        color: #799283;
    }
`;

export const Icons = styled.div`
    position: absolute;
    right: 15px;
    bottom: 15px;
    font-size: 20px;

    svg:nth-child(1) {
        color: #5AD07A;
        margin-right: 5px;
    }

    svg:nth-child(2) {
        color: #E23428;
    }

    svg:active {
        transform: scale(0.9);
        transition: all 100ms ease-in-out;
    }
`;
