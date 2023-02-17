import styled from 'styled-components';
import background from '../media/background.jpg'

export const Wrapper = styled.div`
    display: flex;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    background-image: url(${background});
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 150px;
`;

export const HeaderText = styled.h1`
    font-size: 85px;
    width: 75%;
    color: white;
`;

export const DescPara = styled.div`
    font-size: medium;
    color: white;
    margin-top: -15px;
`

export const HeaderPara = styled.p`
    font-size: medium;
    color: white;
    margin-top: -45px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    margin-top: 25px;
`;

export const HeaderPlayBtn = styled.button`
    height: 50px;
    background-color: #3232eb;
    border: none;
    width: 150px;
    color: white;
    border-radius: 36px;
    margin: 0px;
`;

export const WatchlistBtn = styled.button`
    border: 2px solid white;
    background: none;
    border-radius: 360px;
    width: 50px;
    height: 50px;
    margin: 0;
    margin-left: 20px;
`;

export const Span = styled.span`
    color: #ffa600d2;
    font-style: oblique;
`;
