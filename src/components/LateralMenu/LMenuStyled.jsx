import styled from "styled-components";

export const Key = styled.div`
    display: inline;

    & > svg {
        transform: scaleY(-1);
        rotate: 90deg;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0 70px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;

    & > a {
        color: #799283;
        display: flex;
        align-items: center;
        gap: 25px;
    }
`;

export const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 30px 50px 50px 70px;
`;

export const Logo = styled.div`
    font-family: 'Poppins', sans-serif;;
    font-weight: 400;
    font-size: 17px;
    padding: 0px 10px;
    background: #FFFFFF;
    box-shadow: 0px 14px 24px rgba(139, 139, 139, 0.25);
    color: #262626;
`;

export const H = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    color: #262626;
`;

export const M = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    color: #262626;
`;

export const P = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    color: #5D5449;
    font-size: 8px;
`;

export const LateralNav = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 13px 3px 40px #00000005;
    height: 100vh;
`;