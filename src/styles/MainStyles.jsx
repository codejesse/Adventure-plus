import styled from 'styled-components';
import background from '../media/background.jpg'

export const Wrapper = styled.div`
    display: flex;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 95vh;
    background-image: url(${background});
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 140px;
    @media (max-width: 1200px) {
        margin: 30px;
        width: 100%;
        margin-top: 100px;
    }
`;

export const HeaderText = styled.h1`
    font-size: 85px;
    width: 75%;
    color: white;
    @media (max-width: 800px) {
        font-size: 10vw;
        width: 100%;
    }
`;

export const DescPara = styled.div`
    font-size: medium;
    color: white;
    margin-top: -45px;
    width: 45%;
`;

export const HeaderPara = styled.p`
    font-size: medium;
    color: white;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    margin-top: 15px;
`;

export const HeaderPlayBtn = styled.button`
    height: 60px;
    background-color: #3232eb;
    border: none;
    width: 180px;
    color: white;
    border-radius: 36px;
    margin: 0px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
`;

export const WatchlistBtn = styled.button`
    border: 2px solid white;
    background: none;
    border-radius: 360px;
    width: 60px;
    height: 60px;
    margin: 0;
    margin-left: 20px;
`;

export const Span = styled.span`
    color: #ffa600d2;
    font-style: oblique;
`;
