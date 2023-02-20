import styled from "styled-components";

export const UsersContent = styled.div`
    margin: 30px;
`;

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
    text-transform: uppercase;
`;

export const Inactive = styled.span`
    color: #E23428;
    font-family: 'Poppins', sans-serif;;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
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

    input {
        outline: none;
        border: none;
        border-bottom: 2px solid #135846;
        color: #135846;
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 14px;
        background: #F8F8F8; 
        padding: 0 5px;
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