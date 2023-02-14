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
    gap: 30px;
`;

export const Active = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    display: flex;

    & > a {
        display: flex;
        align-items: center;
        gap: 25px;
        padding: 0 13%;
    }

    & > div {
        width: 5px;
        height: 30px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;

export const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 30px 15% 50px 15%;
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

export const UserBox = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    position: relative;
    margin: 100px 15% 40px 15%;
    padding: 50px 20px 20px 20px;
`;
export const ImgBox = styled.div`
    position: absolute;
    width: 70px;
    border-radius: 8px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    top: -35px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;
export const H4 = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #393939;
    text-align: center;
`;
export const H5 = styled.h5`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 12px;
    color: #B2B2B2;
    text-align: center;
    margin-top: 10px;
`;
export const Button = styled.button`
    display: block;
    margin: auto;
    background: #EBF1EF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    border: none;
    color: #135846;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 45px;
    margin-top: 15px;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease-in-out;
    }
`;

export const H3 = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #212121;
    text-align: center;
`;

export const CopyRights = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 13px;
    color: #799283;
    text-align: center;
`;