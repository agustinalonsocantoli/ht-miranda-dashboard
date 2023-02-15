import styled from "styled-components";

export const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 100px 30px 30px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 14px #00000005;

    & > div {
        display: flex;
        align-items: center;
        gap: 30px;
    }
`;

export const H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 28px;
    color: #262626;
`;

export const Icon = styled.div`
    position: relative;

    span {
        position: absolute;
        background: #E23428;
        color: #FFFFFF;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 10px;
        border-radius: 8px;
        padding: 3px 8px;
        right: -9px;
        top: -9px;
    }

    & > svg {
        font-size: 28px;
        color: #135846;
    }

    &:hover {
        transform: scale(1.1);
        transition: all 200ms ease;
    }
`;

export const IconMenu = styled.div`

    & > svg {
        font-size: 28px;
        color: #000000;
    }
`;