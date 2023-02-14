import styled from "styled-components";

export const BoxBookings = styled.div`
    display: flex;
    margin: 30px;
    border-radius: 10px;
    border: 1px solid black;
`;

export const ImgSlider = styled.div`
    min-width: 555px;
    height: 565px;

    & > img {
        objet-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 0 10px 10px 0;
    }   
`;

export const ImgUser = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 10px;

    & > img {
        objet-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }   
`;

export const DataUser = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const DataCheck = styled.div`
    display: flex;
    border-bottom: 2px solid #CCCCCC;
    margin: 0 20px 0 20px;
    padding-bottom: 15px;
`;