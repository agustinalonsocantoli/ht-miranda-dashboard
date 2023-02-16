import styled from "styled-components";

export const NameBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 3px;

        p {
            color: #393939;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 12px;
        }

        p:nth-child(1) {
            color: #212121;
            font-weight: 500;
            font-size: 14px;
        }
    }

    img {
        object-fit: cover;
        max-width: 70px;
        border-radius: 10px;
    }
`;

export const Text = styled.p`
    color: #393939;
    font-family: 'Poppins', sans-serif;;
    font-weight: 400;
    font-size: 13px;
`;

export const TextDate = styled.p`
    color: #393939;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
`;

export const TextEmail = styled.p`
    color: #799283;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 13px;
`;

export const TextCont = styled.p`
    color: #212121;
    font-family: 'Poppins', sans-serif;;
    font-weight: 600;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 3px;

    svg {
        font-size: 20px;
    }
`;

export const Active = styled.span`
    color: #5AD07A;
    font-family: 'Poppins', sans-serif;;
    font-weight: 600;
    font-size: 14px;
`;

export const Inactive = styled.span`
    color: #E23428;
    font-family: 'Poppins', sans-serif;;
    font-weight: 600;
    font-size: 14px;
`;