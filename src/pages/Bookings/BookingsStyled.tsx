import styled from "styled-components";

export const BookingsContent = styled.div`
    margin: 30px;
`;

export const NameBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & > div {
        display: flex;
        flex-direction: column-reverse;
        align-items: start;
        gap: 3px;

        p {
            color: #393939;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 14px;
        }

        p:first-child {
            color: #799283;
            font-weight: 400;
            font-size: 12px;
        }
    }

    img {
        object-fit: cover;
        max-width: 40px;
        border-radius: 10px;
    }
`;

export const Date = styled.p`
    color: #393939;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
`;

export const Check = styled.div`
    p {
        color: #393939;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
    }
`;

export const Notes = styled.button`
    color: #212121;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    background: #EEF9F2;
    border-radius: 12px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;

    &:active {
        transform: scale(1.1);
        transition: all 100ms ease;
    }
`;

export const TextRoom = styled.span`
    color: #393939;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
`;

export const Booked = styled.span`
    color: #5AD07A;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 14px;
    background: #E8FFEE;
    border-radius: 12px;
    padding: 10px 15px;
`;

export const Refund = styled.span`
    color: #E23428;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 14px;
    background: #FFEDEC;
    border-radius: 12px;
    padding: 10px 15px;
`;

export const Progress = styled.span`
    color: #E7D327;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 14px;
    background: #FCF3AF;
    border-radius: 12px;
    padding: 10px 15px;
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px 10px 10px;
    margin-bottom: 10px;

    select {
        border: 1px solid #135846;
        border-radius: 10px;
        padding: 10px 25px;
        color: #135846;
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 14px;
        background: #F8F8F8;
        margin-left: 10px;
    }
`;

export const Filters = styled.div`
    display: flex;
    align-items: center;

    p {
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 14px;
        color: #6E6E6E;
        padding: 8px 20px; 
        border-bottom: 2px solid #6E6E6E;
        cursor: pointer;

        &:active {
            color: #135846;
            border-bottom: 2px solid #135846;
        }
    }
`;

export const Close = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 20px;
    cursor: pointer;

    svg {
        color: #FFFFFF;
        margin-right: 5px;
    }

    svg:active {
        transform: scale(0.9);
        transition: all 100ms ease-in-out;
    }
`;

export const PopupBox = styled.div`
    border-radius: 10px;
    padding: 2% 3% 1% 3%;
    font-family: 'Poppins', sans-serif;;
    color: #FFFFFF;
    background: rgb(19 88 70 / 95%);
    position: fixed;
    margin: 0 20% 0 5%;
    top: 35%;

    h3 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 15px;

        span {
            text-transform: capitalize;
            font-weight: 600;
        }
    }

    p {
        font-size: 16px;
        font-weight: 400;
    }

    p:nth-child(3) {
        text-align: right;
        margin-top: 20px;
    }
`;