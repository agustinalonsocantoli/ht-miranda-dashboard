import styled from "styled-components";

export const BoxBookings = styled.div`
    display: flex;
    margin: 30px;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px #00000005;
`;

export const ImgUser = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 10px;

    & > img {
        objet-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }   
`;

export const ImgSlider = styled.div`
    min-width: 555px;
    height: 565px;
    position: relative;
    overflow: hidden;

    & > img {
        objet-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 0 10px 10px 0;
    }   
`;

export const Status = styled.div`
    position: absolute;
    top: 5%;
    left: 70%;
    background: ${props => props.status === 'Booked' ? '#5AD07A' : props.status === 'Refund' ? '#E23428' : '#E7D327'};
    opacity: .8;
    rotate: 45deg;
    padding: 15px 75px;

    p {
        color: #FFFFFF;
        font-family: 'Poppins', sans-serif;;
        font-weight: 600;
        font-size: 20px;
    }
`;

export const ImgText = styled.div`
    position: absolute;
    bottom: 10%;
    left: 10%;
    right: 10%;
    margin: auto;

    h4 {
        color: #FFFFFF;
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 15px;
    }

    p {
        color: #EBEBEB;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 12px;
    }
`;

export const DataUser = styled.div`
    display: flex;
    padding: 15px 20px;
    gap: 25px;
`;

export const User = styled.div`
    & > h3 {
        color: #212121;
        font-family: 'Poppins', sans-serif;;
        font-weight: 600;
        font-size: 25px;
        margin-bottom: 10px;
    }

    & > h4 {
        color: #799283;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 13px;
        margin-bottom: 15px;
    }

    div {
        display: flex;
        gap: 15px
    }
`;

export const BtnPhone = styled.button`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E8F2EF;
    border-radius: 10px;
    color: #135846;
    padding: 10px;
    font-size: 13px;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease;
    }
`;

export const BtnMsg = styled.button`
    background: #135846 0% 0% no-repeat padding-box;
    border-radius: 10px;
    color: #FFFFFF;
    border: none;
    padding: 10px 15px;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease;
    }
`;

export const DataCheck = styled.div`
    display: flex;
    border-bottom: 2px solid #CCCCCC;
    margin: 0 20px 0 20px;
    padding-bottom: 15px;
    justify-content: space-between;
    width: 75%;

    h5 { 
        color: #6E6E6E;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 13px;
    }

    p {
        color: #393939;
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 15px;
    }
`;

export const Icon = styled.div`
    font-size: 25px;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease;
    }
`;

export const BtnOptions = styled.div`
        position: relative;
        margin-left: auto;
        margin-top: 15px;
`;

export const Actions = styled.div`
    display: ${props => props.actions ? 'block' : 'none'};
    position: absolute;
    top: 25px;
    right: 15px;
    background: #EBF1EF 0% 0% no-repeat padding-box;
    border-radius: 5px;
    padding: 15px;

    p {
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

    p:last-child {
        margin-bottom: 0;
    }
`;

export const DataRooms = styled.div`
    display: flex;
    padding: 15px 20px;
    justify-content: space-between;
    width: 75%;
`;

export const Rooms = styled.div`
    h5 {
        color: #6E6E6E;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 13px;
    }

    p {
        color: #212121;
        font-family: 'Poppins', sans-serif;;
        font-weight: 500;
        font-size: 20px;
    }
`;

export const Text = styled.p`
    padding: 0 20px;
    color: #363636;
    font-family: 'Poppins', sans-serif;;
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 15px;
`;

export const Facilities = styled.div`
    padding: 0 20px;

    h5 {
        color: #6E6E6E;
        font-family: 'Poppins', sans-serif;;
        font-weight: 400;
        font-size: 13px;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
    }

    span {
        color: #135846;
        font-family: 'Poppins', sans-serif;;
        font-weight: 600;
        font-size: 12px;
        background: #EBF1EF 0% 0% no-repeat padding-box;
        border-radius: 8px;
        padding: 7px 15px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;