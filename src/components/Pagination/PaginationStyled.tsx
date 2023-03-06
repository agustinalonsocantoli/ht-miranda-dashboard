import styled from 'styled-components';

export const PaginationBox = styled.div`
    margin: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    padding-right: 3%;

    ul {
        display: flex;
        align-items: center;
    }

    button {
        background: #FFFFFF;
        border: 1px solid #135846;
        border-radius: 12px;
        padding: 15px 30px;
        color: #135846;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 14px;

        &:active {
            transform: scale(0.9);
            transition: all 100ms ease;
        }

        &:disabled {
            border: 1px solid #B2B2B2;
            color: #B2B2B2;
        }
    }
`;

export const List = styled.li<{active: number, item: number}>`
    position: relative;
    padding: 15px;
    cursor: pointer;
    border-radius: 12px;
    font-family: 'Poppins', sans-serif;;
    font-weight: 400;
    font-size: 14px;
    color:${props => props.active === props.item ? '#FFFFFF' : '#393939'};
    background:${props => props.active === props.item ? '#135846' : 'transparent'};

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease;
    }
`;