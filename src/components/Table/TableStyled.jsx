import styled from "styled-components";

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 95%;
    margin: 20px;
    border-radius: 20px;

    th {
        border-bottom: 1px solid #EBEBEB;
        color: #393939;
        font-family: 'Poppins', sans-serif;;
        font-weight: 600;
        font-size: 15px;
        text-align: left;
        padding: 10px 15px;
        width: 50px;
    }
    
    td {
        border-bottom: 1px solid #EBEBEB;
        width: ${props => props.columnWidth }%;
        text-align: left;
        padding: 10px 15px;
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
    padding: 10px;

    li {
        display: flex;
        align-items: center;
        gap: 5px;
        font-family: 'Poppins', sans-serif;;
        font-weight: 300;
        font-size: 14px;
        color: #135846;
    }
`;

export const Icon = styled.div`
    color: #575757;
    font-size: 20px;
`;