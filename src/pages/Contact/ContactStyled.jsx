import styled from "styled-components";

export const ContactContent = styled.div`
    margin: 30px;
`;

export const Review = styled.div`
    margin-bottom: 50px;
`;

export const Date = styled.div`
    
    p {
        color: #393939;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 14px;
    }
`;

export const Customer = styled.div`

    p {
        color: #799283;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 12px;
    }

    p:nth-child(1) {
        color: #393939;
        font-size: 14px;
    }
`;

export const Comment = styled.div`

    p {
        color: #393939;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 12px;
    }

    p:nth-child(1) {
        text-transform: capitalize;
        text-decoration: underline;
        font-weight: 300;
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    color: #E23428;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 16px;
    border: none;
    background: transparent;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease-in-out;
    }
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