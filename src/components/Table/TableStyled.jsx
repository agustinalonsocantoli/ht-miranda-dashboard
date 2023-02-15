import styled from "styled-components";

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 90%;
    
    td, th {
        text-align: left;
        border: 1px solid #cccccc;
        padding: 2px;

        div {
            display: flex;
            align-items: center;
            gap: 10px;

            & > div {
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 3px;
            }
        }

        img {
            object-fit: cover;
            width: 60px;
            height: 60px; 
        }
    }
`;