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
            color: #393939;
            font-family: 'Poppins', sans-serif;;
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

export const TextFac = styled.p`
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