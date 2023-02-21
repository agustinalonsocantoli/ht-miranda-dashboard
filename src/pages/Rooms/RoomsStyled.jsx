import styled from "styled-components";

export const RoomsContent = styled.div`
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
            font-family: 'Poppins', sans-serif;
            color: #799283;
            font-weight: 400;
            font-size: 12px;
            
        }

        p:first-child {
            color: #393939;
            font-weight: 500;
            font-size: 14px;
        }
    }

    img {
        object-fit: cover;
        max-width: 100px;
        border-radius: 10px;
    }
`;

export const Text = styled.p`
    color: #393939;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 14px;
`;

export const TextFac = styled.span`
    color: #212121;
    font-family: 'Poppins', sans-serif;;
    font-weight: 300;
    font-size: 13px;
`;

export const TextRate = styled.p`
    color: #212121;
    font-family: 'Poppins', sans-serif;;
    font-weight: 600;
    font-size: 15px;

    span {
        color: #799283;
        font-weight: 400;
        font-size: 12px;
    }
`;

export const TextOffer = styled.p`
    color: #E23428;
    font-family: 'Poppins', sans-serif;;
    font-weight: 600;
    font-size: 15px;

    span {
        color: #799283;
        font-weight: 400;
        font-size: 12px;
    }
`;

export const Available = styled.span`
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 15px;
    background: #5AD07A;
    border-radius: 12px;
    padding: 10px;
`;

export const Booked = styled.span`
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 15px;
    background: #E23428;
    border-radius: 12px;
    padding: 10px;
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px 10px 10px;

    button {
        background: #135846;
        border-radius: 10px;
        color: #FFFFFF;
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 14px;
        border: none;
        padding: 10px 25px;
        cursor: pointer;

        &:active {
            transform: scale(0.98);
            transition: all 100ms ease-in-out;
        }
    }

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
        padding: 8px 15px; 
        border-bottom: 2px solid #6E6E6E;
        cursor: pointer;

        &:active {
            color: #135846;
            border-bottom: 2px solid #135846;
        }
    }
`;