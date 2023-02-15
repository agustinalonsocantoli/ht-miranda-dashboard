import styled from "styled-components";

export const BoxDashboard = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 15% 85%;
`;

export const BoxOutNav = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const TopNav = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
`;

export const LateralNav = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
`;

export const Components = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background: #F5F5F5;
`;