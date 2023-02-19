import styled from "styled-components";

export const DashboardContent = styled.div`
    margin: 30px;
`;

export const InfoBox = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    padding: 20px 60px 20px 30px;
    gap: 20px;

    p {
        font-family: 'Poppins', sans-serif;;
        font-weight: 600;
        font-size: 25px;
        color: #393939;
    }

    p:nth-child(2) {
        color: #787878;
        font-weight: 300;
        font-size: 12px;
    }

    svg {
        color: #E23428;
        font-size: 25px;
        min-width: 60px;
        min-height: 60px;
        padding: 15px;
        background: #FFEDEC;
        border-radius: 8px;
    }

    &:hover {
        box-shadow: 0px 16px 30px #00000014;

        svg {
            background: #E23428;
            color: #FFFFFF;
        }
    }

`;

export const IconIn = styled.div`
    rotate: 180deg;
`;

export const Review = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    padding: 25px;
    padding-right: 35px;
    margin-top: 30px;
    margin-right: 15px;
    position: relative;

    h1 {
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 18px;
        color: #393939;
        margin-bottom: 25px;
    }
`;

export const Arrow = styled.div`
    position: absolute;
    right: -25px;
    top: 50%;
    background: #135846;
    padding: 8px 10px 5px 10px;
    border-radius: 12px;

    svg {
        color: #FFFFFF;
        font-size: 30px;
    }
`;