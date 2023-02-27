import styled from "styled-components";

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 95%;
    border-radius: 20px;
    background: #FFFFFF;

    th {
        border-bottom: 1px solid #EBEBEB;
        color: #393939;
        font-family: 'Poppins', sans-serif;;
        font-weight: 600;
        font-size: 14px;
        text-align: left;
        padding: 10px 15px;
        width: 50px;
    }
    
    td {
        width: ${props => props.columnWidth }%;
        text-align: left;
        padding: 10px 15px;
    }

    tr {
        border-bottom: 1px solid #EBEBEB;
    }

    tr:last-child {
        border: none;
    }

    tbody > tr:hover {
        background: #F8F8F8;
        transform: scale(1.03);
        transition: all 300ms ease;
    }
`;

export const BtnOptions = styled.div`
    position: relative;
`;

export const OptionsMenu = styled.ul`
    display: ${props => props.visible ? `block` : `none`};
    position: absolute;
    top: 7px;
    right: 15px;
    background: #EBF1EF 0% 0% no-repeat padding-box;
    border-radius: 5px;
    padding: 15px;

    li {
        display: flex;
        align-items: center;
        gap: 5px;
        font-family: 'Poppins', sans-serif;;
        font-weight: 300;
        font-size: 14px;
        color: #135846;
        margin-bottom: 10px;
        cursor: pointer;

        &:active {
            transform: scale(1.1);
            transition: all 100ms ease;
        }
    }

    li:last-child {
        margin-bottom: 0;
    }
`;

export const Icon = styled.div`
    color: #575757;
    font-size: 20px;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease;
    }
`;